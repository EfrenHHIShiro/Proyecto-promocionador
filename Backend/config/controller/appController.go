package controller

import (
	ai "promocionadorApi/auth/infrastructure"
	ci "promocionadorApi/categorys/infrastructure"
	csi "promocionadorApi/countries/infrastructure"
	ui "promocionadorApi/users/infrastructure"
)

type AppController interface {
	ai.AuthController
	ci.CategoryController
	csi.CountryController
	ui.UserController
}
