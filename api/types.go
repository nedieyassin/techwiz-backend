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

type MarkQuestions struct {
	Questions []MarkQuestion `json:"questions"`
}

type MarkQuestion struct {
	QuestionID string `json:"question_id"`
	AnswerID   string `json:"answer_id"`
}

type QuestionL struct {
	ID      string `json:"id"`
	Options string `json:"options"`
}

type OptionL struct {
	ID        string `json:"id"`
	IsCorrect bool   `json:"is_correct"`
	Label     string `json:"label"`
}

type QuestionWithAnswers struct {
	Question string `json:"question"`
	Answer   string `json:"answer"`
	Passed   bool   `json:"passed"`
}
