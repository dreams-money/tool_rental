package config

import (
	"encoding/json"
	"io"
	"os"
)

type SQL struct {
	Host     string `json:"host"`
	Port     string `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
	Database string `json:"database"`
	SSLMode  string `json:"sslmode"`
}

type SMTP struct {
	Host      string `json:"host"`
	Port      string `json:"port"`
	User      string `json:"user"`
	Password  string `json:"password"`
	FromEmail string `json:"from"`
}

type Recipient struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type Config struct {
	Recipients []Recipient `json:"recipients"`
	Persister  SQL         `json:"persistence"`
	Mailer     SMTP        `json:"mail"`
}

func LoadConfig(fileName string) (*Config, error) {
	file, err := os.Open(fileName)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	fileBytes, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}

	var c Config
	err = json.Unmarshal(fileBytes, &c)
	if err != nil {
		return nil, err
	}

	return &c, nil
}
