package interactor

import (
	"promocionadorApi/categorys/application"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/categorys/infrastructure"
	"promocionadorApi/config/controller"

	"promocionadorApi/categorys/infrastructure/routes"

	"github.com/labstack/echo/v4"
)

func (i *interactor) NewCategoryRepository() domain.CategoryRepository {
	return application.NewCategoryRepository(i.db)
}

// func (i *interactor) NewUserUseCase() usecase.UserUseCase {
// 	return usecase.NewUserUseCase(i.NewUserRepository())
// }

func (i *interactor) NewCategoryController() infrastructure.CategoryController {
	return infrastructure.NewCategoryController(i.NewCategoryRepository())
}

func (i *interactor) NewMakeCategoryRoutes(r *echo.Echo, c controller.AppController) {
	routes.MakeCategoryRoutes(r, c)
}
