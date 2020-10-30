package routes

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func MakeUserRoutes(r *echo.Echo, c controller.AppController) {
	r.GET("user/create", c.UserCreator)
}
