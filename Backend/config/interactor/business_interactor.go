package interactor

import (
	"promocionadorApi/business/application"
	"promocionadorApi/business/domain"
	"promocionadorApi/business/infrastructure"
	"promocionadorApi/business/infrastructure/routes"
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func (i *interactor) NewBusinessRepository() domain.BusinessRepository {
	return application.NewBusinessRepository(i.db)
}

// func (i *interactor) NewUserUseCase() usecase.UserUseCase {
// 	return usecase.NewUserUseCase(i.NewUserRepository())
// }

func (i *interactor) NewBusinessController() infrastructure.BusinessController {
	return infrastructure.NewBusinessController(i.NewBusinessRepository())
}

func (i *interactor) NewMakeBusinessRoutes(r *echo.Echo, c controller.AppController) {
	routes.MakeBusinessRoutes(r, c)
}
