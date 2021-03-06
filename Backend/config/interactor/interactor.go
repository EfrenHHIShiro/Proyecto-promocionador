package interactor

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/mongo"
)

type Interactor interface {
	NewAppController() controller.AppController
	NewMakeRoutes(r *echo.Echo, c controller.AppController)
}

type interactor struct {
	db *mongo.Database
}

func NewInteractor(db *mongo.Database) Interactor {
	return &interactor{db}
}

func (i *interactor) NewAppController() controller.AppController {
	appController := &appController{}
	appController.AuthController = i.NewAuthController()
	appController.BusinessController = i.NewBusinessController()
	appController.CategoryController = i.NewCategoryController()
	appController.CountryController = i.NewCountryController()
	appController.UserController = i.NewUserController()
	return appController
}

func (i *interactor) NewMakeRoutes(r *echo.Echo, c controller.AppController) {
	i.NewMakeAuthRoutes(r, c)
	i.NewMakeBusinessRoutes(r, c)
	i.NewMakeCategoryRoutes(r, c)
	i.NewMakeCountryRoutes(r, c)
	i.NewMakeUserRoutes(r, c)
}
