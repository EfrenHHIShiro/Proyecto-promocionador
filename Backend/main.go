package main

import (
	"net/http"
	"promocionadorApi/config/database"
	"promocionadorApi/config/interactor"
	"promocionadorApi/config/middleware"

	"github.com/labstack/echo/v4"
)

func main() {
	db := database.InitData()

	r := echo.New()

	i := interactor.NewInteractor(db)

	h := i.NewAppController()

	i.NewMakeRoutes(r, h)

	middleware.NewMiddleware(r)

	http.ListenAndServe(":8080", r)
}
