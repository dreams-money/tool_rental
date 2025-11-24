package email

import (
	"errors"
	"log"
	"net/smtp"

	"github.com/dreams-money/tool_rental/internal/config"
)

type Sender struct {
	config config.SMTP
}

func NewSender(config config.SMTP) Sender {
	return Sender{
		config: config,
	}
}

func (s Sender) Send(email Email) error {
	if email.Address == "" {
		return errors.New("invalid email address")
	}

	template, err := makeTemplate(email.TemplateName, email.Parameters)
	if err != nil {
		return err
	}
	subject, err := template.getSubject()
	if err != nil {
		return err
	}
	body, err := template.getBody()
	if err != nil {
		return err
	}

	msg := []byte("To: " + email.Address + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"Content-Type: text/html; charset=\"utf-8\"\r\n" +
		"\r\n" +
		body + "\r\n")

	to := []string{email.Address}

	auth := smtp.PlainAuth("", s.config.User, s.config.Password, s.config.Host)
	err = smtp.SendMail(s.config.Host+":"+s.config.Port, auth, s.config.FromEmail, to, msg)
	if err != nil {
		return err
	}

	log.Println(email.TemplateName + " sent successfully to: " + email.Address)

	return nil
}
