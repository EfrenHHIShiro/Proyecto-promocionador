package interactor

import (
	"promocionadorApi/auth/application"
	"promocionadorApi/auth/domain"
	"promocionadorApi/auth/infrastructure"
	"promocionadorApi/auth/infrastructure/routes"
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func (i *interactor) NewAuthRepository() domain.AuthRepository {
	return application.NewAuthRepository(i.db)
}

// func (i *interactor) NewUserUseCase() usecase.UserUseCase {
// 	return usecase.NewUserUseCase(i.NewUserRepository())
// }

func (i *interactor) NewAuthController() infrastructure.AuthController {
	return infrastructure.NewAuthController(i.NewAuthRepository())
}

func (i *interactor) NewMakeAuthRoutes(r *echo.Echo, c controller.AppController) {
	routes.MakeAuthRoutes(r, c)
}
