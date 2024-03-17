package api

import (
	"encoding/json"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"log"
)

func GetQuestionsHandler(app *pocketbase.PocketBase, topic string, difficulty string) []Question {

	// Slice to store retrieved questions
	var questions []Question

	// Define the query
	query := `
		SELECT 
			id,
			topic,
			question,
			answer_description,
			options,
			tags,
			difficulty
		FROM 
			questions
        WHERE
            topic = {:topic} COLLATE NOCASE AND difficulty = {:difficulty} COLLATE NOCASE
        ORDER BY RANDOM()
		LIMIT 
			10
	`

	// Execute the query
	rows, err := app.Dao().DB().NewQuery(query).Bind(dbx.Params{
		"topic":      topic,
		"difficulty": difficulty,
	}).Rows()
	if err != nil {
		log.Fatalf("Error executing query: %v", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			log.Fatalf("Error closing rows: %v", err)
		}
	}()

	// Iterate over the rows
	for rows.Next() {
		var question Question

		// Scan the row into variables
		var (
			id                string
			topic             string
			questionText      string
			answerDescription string
			difficulty        string
			optionsJSON       string
			tagsJSON          string
		)
		if err := rows.Scan(&id, &topic, &questionText, &answerDescription, &optionsJSON, &tagsJSON, &difficulty); err != nil {
			log.Fatalf("Error scanning row: %v", err)
		}

		// Unmarshal options and tags from JSON
		var options []Option
		if err := json.Unmarshal([]byte(optionsJSON), &options); err != nil {
			log.Fatalf("Error unmarshalling options JSON: %v", err)
		}

		var tags []string
		if err := json.Unmarshal([]byte(tagsJSON), &tags); err != nil {
			log.Fatalf("Error unmarshalling tags JSON: %v", err)
		}

		if err != nil {
			log.Fatalf("Error unmarshalling tags JSON: %v", err)
		}

		shuffleOptions(options)
		// Populate the Question struct
		question = Question{
			ID:                id,
			Topic:             topic,
			Question:          questionText,
			Options:           options,
			AnswerDescription: answerDescription,
			Difficulty:        difficulty,
			Tags:              tags,
		}

		// Append the question to the slice
		questions = append(questions, question)
	}

	if err := rows.Err(); err != nil {
		log.Fatalf("Error iterating over rows: %v", err)
	}

	return questions
}
func GetQuestionsToMarkHandler(app *pocketbase.PocketBase, mq []MarkQuestion) []QuestionWithAnswers {
	// Slice to store retrieved questions
	var rawQuestions []QuestionL

	// Extract question IDs
	var ids []interface{}
	for _, item := range mq {
		ids = append(ids, item.QuestionID)
	}

	// Execute the query
	err := app.Dao().DB().Select("id", "options").From("questions").Where(dbx.In("id", ids...)).All(&rawQuestions)
	if err != nil {
		log.Fatalf("Error executing query: %v", err)
	}

	// Process retrieved questions
	var questionsWithAnswers []QuestionWithAnswers
	for _, question := range rawQuestions {
		options, err := UnmarshalOptions(question.Options)
		if err != nil {
			log.Fatalf("Error unmarshalling options JSON: %v", err)
		}

		userAnswer := GetUserAnswer(question.ID, mq)

		for _, option := range options {
			if option.IsCorrect {
				questionWithAnswer := QuestionWithAnswers{
					Question: question.ID,
					Answer:   option.ID,
					Passed:   userAnswer == option.ID,
				}
				questionsWithAnswers = append(questionsWithAnswers, questionWithAnswer)
			}
		}
	}

	return questionsWithAnswers
}
