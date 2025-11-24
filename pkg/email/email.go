package email

type Email struct {
	Address       string
	RecipientName string
	TemplateName  string
	Parameters    map[string]string
}
