package interactor

import (
	aInfrastructure "promocionadorApi/auth/infrastructure"
	cInfrastructure "promocionadorApi/categorys/infrastructure"
	uInfrastructure "promocionadorApi/users/infrastructure"
)

type appController struct {
	uInfrastructure.UserController
	cInfrastructure.CategoryController
	aInfrastructure.AuthController
}
