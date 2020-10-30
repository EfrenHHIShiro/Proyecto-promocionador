package interactor

import (
	"promocionadorApi/users/application"
	"promocionadorApi/users/domain"
	"promocionadorApi/users/infrastructure"

	"promocionadorApi/config/controller"
	"promocionadorApi/users/infrastructure/routes"

	"github.com/labstack/echo/v4"
)

func (i *interactor) NewUserRepository() domain.UserRepository {
	return application.NewUserRepository(i.db)
}

// func (i *interactor) NewUserUseCase() usecase.UserUseCase {
// 	return usecase.NewUserUseCase(i.NewUserRepository())
// }

func (i *interactor) NewUserController() infrastructure.UserController {
	return infrastructure.NewUserController(i.NewUserRepository())
}

func (i *interactor) NewMakeUserRoutes(r *echo.Echo, c controller.AppController) {
	routes.MakeUserRoutes(r, c)
}
