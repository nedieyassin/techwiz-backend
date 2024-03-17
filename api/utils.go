package api

import (
	"encoding/json"
	mrand "math/rand"
)

func shuffleOptions(options []Option) {
	mrand.Shuffle(len(options), func(i, j int) {
		options[i], options[j] = options[j], options[i]
	})
}

func UnmarshalOptions(optionsStr string) ([]OptionL, error) {
	var options []OptionL
	if err := json.Unmarshal([]byte(optionsStr), &options); err != nil {
		return nil, err
	}
	return options, nil
}

func GetUserAnswer(questionID string, mq []MarkQuestion) string {
	for _, item := range mq {
		if item.QuestionID == questionID {
			return item.AnswerID
		}
	}
	return ""
}
