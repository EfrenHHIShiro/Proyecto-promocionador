package routes

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func MakeAuthRoutes(r *echo.Echo, c controller.AppController) {
	// Users
	r.POST("auth/RegisterUser/", c.RegisterUser)
	r.POST("auth/LoginUser/", c.LoginUser)
	r.POST("auth/ActivateUser/", c.ActiveUserAccount)
	r.POST("auth/CheckPinCodeUser/", c.CheckPinUserMovile)
	// Business
	r.POST("auth/RegisterBusiness/", c.RegisterBusiness)
}
