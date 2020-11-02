package infrastructure

import (
	"promocionadorApi/countries/domain"

	"github.com/labstack/echo/v4"
)

type CountryController interface {
	CountryCreator(c echo.Context) error
	CountryDelete(c echo.Context) error
	CountryGetAll(c echo.Context) error
	CountryUpdate(c echo.Context) error
	StateCreator(c echo.Context) error
	StateDelete(c echo.Context) error
	StateUpdate(c echo.Context) error
}

type countryController struct {
	domain.CountryRepository
}

func NewCountryController(r domain.CountryRepository) CountryController {
	return &countryController{r}
}
