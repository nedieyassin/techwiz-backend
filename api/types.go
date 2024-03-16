package api

type Option struct {
	ID    string `json:"id"`
	Label string `json:"label"`
}

type Question struct {
	ID                string   `json:"id"`
	Topic             string   `json:"topic"`
	Question          string   `json:"question"`
	Options           []Option `json:"options"`
	AnswerDescription string   `json:"answer_description"`
	Difficulty        string   `json:"difficulty"`
	Tags              []string `json:"tags"`
}
