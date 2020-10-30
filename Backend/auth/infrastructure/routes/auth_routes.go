package routes

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func MakeAuthRoutes(r *echo.Echo, c controller.AppController) {
	r.POST("auth/RegisterUser/", c.RegisterUser)
	r.POST("auth/LoginUser/", c.LoginUser)
	r.GET("auth/ActivateUser/:id", c.ActiveUserAccount)
}
