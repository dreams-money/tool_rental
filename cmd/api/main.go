package main

import (
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"slices"
	"time"

	"github.com/dreams-money/tool_rental/internal/config"
	"github.com/dreams-money/tool_rental/internal/persistence"
	"github.com/dreams-money/tool_rental/pkg/email"
)

var (
	ErrNoAccess = errors.New("no api access")
	tokens      = []string{
		"mKi5zHscDQcaZAXTStDlvr367qBwamZ7",
	}
)

const (
	dateLayout = time.ANSIC
)

type SendRequest struct {
	ToolID      string    `json:"tool_id"`
	PhoneNumber string    `json:"phone_number"`
	To          time.Time `json:"to"`
	From        time.Time `json:"from"`
}

func SendToolReservation(config *config.Config, mailer *email.Sender, r SendRequest) error {
	tool, err := persistence.Tools.GetTool(r.ToolID)
	if err != nil {
		log.Println(err)
		return nil
	}

	email := email.Email{
		Address:       config.Recipients[0].Email,
		RecipientName: config.Recipients[0].Name,
		TemplateName:  "new_lead",
		Parameters: map[string]string{
			"Tool":  tool.Name,
			"From":  r.From.Format(dateLayout),
			"To":    r.To.Format(dateLayout),
			"Phone": r.PhoneNumber,
		},
	}

	return mailer.Send(email)
}

func checkAccess(r *http.Request) error {
	auth := r.Header.Get("Authorization")
	if auth == "" {
		log.Println("Empty auth")
		return ErrNoAccess
	}

	if !slices.Contains(tokens, auth) {
		log.Println("Authorized access")
		return ErrNoAccess
	}

	return nil
}

func respondSuccess(w http.ResponseWriter) {
	w.WriteHeader(200)
	fmt.Fprintf(w, "ok")
}

func respondError(w http.ResponseWriter, err error) {
	log.Println(err)
	w.WriteHeader(500)
}

func main() {
	dev := flag.Bool("dev", false, "Turn on development mode of this app")

	flag.Parse()

	config, err := config.LoadConfig("config.json")
	if err != nil {
		log.Panic(err)
	}

	persister, err := persistence.Initiate(config.Persister)
	if err != nil {
		log.Panic(err)
	}
	defer persister.Close()

	mailer := email.NewSender(config.Mailer)
	if err != nil {
		log.Panic(err)
	}

	http.HandleFunc("/tools", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			return
		}

		err := checkAccess(r)
		if err != nil {
			respondError(w, err)
			return
		}

		tools, err := persistence.Tools.GetAllTools()
		if err != nil {
			respondError(w, err)
			return
		}

		jsonBytes, err := json.Marshal(&tools)
		if err != nil {
			respondError(w, err)
			return
		}

		fmt.Fprintf(w, string(jsonBytes))
	})

	// Define another handler function for the "/info" route
	http.HandleFunc("/tool", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			return
		}

		err := checkAccess(r)
		if err != nil {
			respondError(w, err)
			return
		}

		toolID := r.URL.Query().Get("id")
		tool, err := persistence.Tools.GetTool(toolID)
		if err != nil {
			respondError(w, err)
			return
		}

		jsonBytes, err := json.Marshal(&tool)
		if err != nil {
			respondError(w, err)
			return
		}

		fmt.Fprintf(w, string(jsonBytes))
	})

	http.HandleFunc("/send", func(w http.ResponseWriter, r *http.Request) {
		enableCORS(w, dev)
		if r.Method != http.MethodPost {
			return
		}

		err = checkAccess(r)
		if err != nil {
			respondError(w, err)
			return
		}

		bodyBytes, err := io.ReadAll(r.Body)
		if err != nil {
			respondError(w, err)
			return
		}

		sr := SendRequest{}

		err = json.Unmarshal(bodyBytes, &sr)
		if err != nil {
			respondError(w, err)
			return
		}

		err = SendToolReservation(config, &mailer, sr)
		if err != nil {
			respondError(w, err)
			return
		}

		respondSuccess(w)
	})

	if *dev {
		log.Println("Starting app in development mode")
	}

	port := ":8080"
	log.Printf("Server starting on port %s\n", port)
	err = http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("Error starting server: %s\n", err)
	}
}

func enableCORS(resp http.ResponseWriter, dev *bool) {
	if *dev {
		resp.Header().Set("Access-Control-Allow-Origin", "*")
	} else {
		resp.Header().Set("Access-Control-Allow-Origin", "https://carson-rentals.com")
	}
	resp.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	resp.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
