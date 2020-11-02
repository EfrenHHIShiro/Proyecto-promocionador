package infrastructure

import (
	"promocionadorApi/Business/domain"

	"github.com/labstack/echo/v4"
)

type BusinessController interface {
	BusinessGetByCategory(c echo.Context) error
	BusinessGetById(c echo.Context) error
}

type businessController struct {
	domain.BusinessRepository
}

func NewBusinessController(r domain.BusinessRepository) BusinessController {
	return &businessController{r}
}
