package infrastructure

import (
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

type AuthController interface {
	// Staff
	LoginWeb(c echo.Context) error
	RegisterWeb(c echo.Context) error
	// Business
	LoginBusiness(c echo.Context) error
	RegisterBusiness(c echo.Context) error
	// Users
	LoginUser(c echo.Context) error
	RegisterUser(c echo.Context) error
	ActiveUserAccount(c echo.Context) error
	CheckPinUserMovile(c echo.Context) error
	PetitionChangePasswordUser(c echo.Context) error
	ChangePasswordUser(c echo.Context) error
}

type authController struct {
	domain.AuthRepository
}

func NewAuthController(r domain.AuthRepository) AuthController {
	return &authController{r}
}
