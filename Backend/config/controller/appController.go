package controller

import (
	ai "promocionadorApi/auth/infrastructure"
	bi "promocionadorApi/business/infrastructure"
	ci "promocionadorApi/categorys/infrastructure"
	csi "promocionadorApi/countries/infrastructure"
	ui "promocionadorApi/users/infrastructure"
)

type AppController interface {
	ai.AuthController
	bi.BusinessController
	ci.CategoryController
	csi.CountryController
	ui.UserController
}
