package infrastructure

import (
	"promocionadorApi/categorys/domain"

	"github.com/labstack/echo/v4"
)

type CategoryController interface {
	CategoryCreator(c echo.Context) error
	CategoryDelete(c echo.Context) error
	CategorysGet(c echo.Context) error
	CategoryUpdate(c echo.Context) error
}

type categoryController struct {
	domain.CategoryRepository
}

func NewCategoryController(r domain.CategoryRepository) CategoryController {
	return &categoryController{r}
}
