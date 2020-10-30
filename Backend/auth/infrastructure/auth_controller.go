package infrastructure

import (
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

type AuthController interface {
	LoginWeb(c echo.Context) error
	LoginBusiness(c echo.Context) error
	LoginUser(c echo.Context) error
	RegisterWeb(c echo.Context) error
	RegisterBusiness(c echo.Context) error
	RegisterUser(c echo.Context) error
	ActiveUserAccount(c echo.Context) error
}

type authController struct {
	domain.AuthRepository
}

func NewAuthController(r domain.AuthRepository) AuthController {
	return &authController{r}
}
