package infrastructure

import (
	"promocionadorApi/users/domain"

	"github.com/labstack/echo/v4"
)

type UserController interface {
	UserCreator(c echo.Context) error
}

type userController struct {
	domain.UserRepository
}

func NewUserController(r domain.UserRepository) UserController {
	return &userController{r}
}
