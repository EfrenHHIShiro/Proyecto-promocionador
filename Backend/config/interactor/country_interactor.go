package interactor

import (
	"promocionadorApi/config/controller"
	"promocionadorApi/countries/application"
	"promocionadorApi/countries/domain"
	"promocionadorApi/countries/infrastructure"
	"promocionadorApi/countries/infrastructure/routes"

	"github.com/labstack/echo/v4"
)

func (i *interactor) NewCountryRepository() domain.CountryRepository {
	return application.NewCountryRepository(i.db)
}

// func (i *interactor) NewUserUseCase() usecase.UserUseCase {
// 	return usecase.NewUserUseCase(i.NewUserRepository())
// }

func (i *interactor) NewCountryController() infrastructure.CountryController {
	return infrastructure.NewCountryController(i.NewCountryRepository())
}

func (i *interactor) NewMakeCountryRoutes(r *echo.Echo, c controller.AppController) {
	routes.MakeCountryRoutes(r, c)
}
