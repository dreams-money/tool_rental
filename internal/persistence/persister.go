package persistence

import (
	"database/sql"
	"errors"

	"github.com/dreams-money/tool_rental/internal/config"
	_ "github.com/go-sql-driver/mysql"
)

var (
	ErrRowExists = errors.New("row exists")
	ErrNoRow     = errors.New("no row")
)

var (
	Tools *ToolRepository
)

type Persister struct {
	db *sql.DB
}

func Initiate(config config.SQL) (*sql.DB, error) {
	dsn := config.User + ":" + config.Password
	dsn += "@tcp(" + config.Host + ":" + config.Port + ")"
	dsn += "/" + config.Database
	dsn += "?parseTime=true"

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}

	Tools = &ToolRepository{db}

	return db, nil
}

func (p Persister) Close() {
	p.db.Close()
}
