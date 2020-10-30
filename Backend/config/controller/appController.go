package controller

import (
	ai "promocionadorApi/auth/infrastructure"
	ci "promocionadorApi/categorys/infrastructure"
	ui "promocionadorApi/users/infrastructure"
)

type AppController interface {
	ai.AuthController
	ci.CategoryController
	ui.UserController
}
