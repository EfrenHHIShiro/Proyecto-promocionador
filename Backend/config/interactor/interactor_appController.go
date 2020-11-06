package interactor

import (
	aInfrastructure "promocionadorApi/auth/infrastructure"
	bInfrastructur "promocionadorApi/business/infrastructure"
	cInfrastructure "promocionadorApi/categorys/infrastructure"
	csInfrastructure "promocionadorApi/countries/infrastructure"
	uInfrastructure "promocionadorApi/users/infrastructure"
)

type appController struct {
	uInfrastructure.UserController
	bInfrastructur.BusinessController
	cInfrastructure.CategoryController
	csInfrastructure.CountryController
	aInfrastructure.AuthController
}
