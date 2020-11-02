package infrastructure

import (
	"promocionadorApi/users/domain"
)

type UserController interface {
}

type userController struct {
	domain.UserRepository
}

func NewUserController(r domain.UserRepository) UserController {
	return &userController{r}
}
