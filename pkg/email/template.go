package email

import (
	"bytes"
	"io"
	"os"
	"text/template"
)

type Template struct {
	Name       string
	Subject    string
	Parameters map[string]string
	Body       string
}

func makeTemplate(templateName string, parameters map[string]string) (Template, error) {
	var err error
	template := Template{
		Parameters: parameters,
	}

	template.Name = templateName
	template.Subject, err = readSubjectFileToString(templateName)
	if err != nil {
		return template, err
	}
	template.Body, err = readyBodyFileToString(templateName)
	if err != nil {
		return template, err
	}

	return template, nil
}

func (t Template) getBody() (string, error) {
	return t.mergeParameters(t.Body)
}

func (t Template) getSubject() (string, error) {
	return t.mergeParameters(t.Subject)
}

func readSubjectFileToString(templateName string) (string, error) {
	return readTemplateFileToString(templateName, "subject.txt")
}

func readyBodyFileToString(templateName string) (string, error) {
	return readTemplateFileToString(templateName, "body.html")
}

func readTemplateFileToString(templateName, fileName string) (string, error) {
	file, err := os.Open("emails/templates/" + templateName + "/" + fileName)
	if err != nil {
		return "", err
	}
	fileBytes, err := io.ReadAll(file)
	if err != nil {
		return "", err
	}

	return string(fileBytes), nil
}

func (t Template) mergeParameters(templateString string) (string, error) {
	txtTemplate, err := template.New(t.Name).Parse(templateString)
	if err != nil {
		return "", err
	}

	var buffer bytes.Buffer
	err = txtTemplate.Execute(&buffer, t.Parameters)
	if err != nil {
		return "", err
	}

	return buffer.String(), nil
}
