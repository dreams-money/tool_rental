package persistence

import (
	"database/sql"
	"time"
)

type ToolReservation struct {
	From time.Time `json:"from"`
	To   time.Time `json:"to"`
}

type Tool struct {
	ID             string            `json:"id"`
	Name           string            `json:"name"`
	Category       string            `json:"category"`
	Description    string            `json:"Description"`
	DailyRate      int               `json:"dailyRate"`
	WeeklyRate     int               `json:"weeklyRate"`
	MontlyRate     int               `json:"monthlyRate"`
	Image          string            `json:"image"`
	Specifications []string          `json:"specs"`
	Reservations   []ToolReservation `json:"reservations"`
}

type ToolRepository struct {
	db *sql.DB
}

func (t *ToolRepository) GetAllTools() ([]Tool, error) {
	return nil, nil
}

func (t *ToolRepository) GetTool(id string) (Tool, error) {
	tool := Tool{}

	return tool, nil
}
