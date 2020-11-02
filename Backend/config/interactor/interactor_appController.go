package interactor

import (
	aInfrastructure "promocionadorApi/auth/infrastructure"
	cInfrastructure "promocionadorApi/categorys/infrastructure"
	csInfrastructure "promocionadorApi/countries/infrastructure"
	uInfrastructure "promocionadorApi/users/infrastructure"
)

type appController struct {
	uInfrastructure.UserController
	cInfrastructure.CategoryController
	csInfrastructure.CountryController
	aInfrastructure.AuthController
}
