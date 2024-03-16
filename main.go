package main

import (
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"log"
	"net/http"
	"techwiz-be/api"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		//
		e.Router.GET("/api/c/questions/:topic/:difficulty", func(c echo.Context) error {

			topic := c.PathParam("topic")
			difficulty := c.PathParam("difficulty")

			questions := api.GetQuestionsHandler(app, topic, difficulty)

			return c.JSON(http.StatusOK, questions)
		} /* optional middlewares */)
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
