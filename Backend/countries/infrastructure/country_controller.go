package infrastructure

import (
	"promocionadorApi/countries/domain"
)

type CountryController interface {
}

type countryController struct {
	domain.CountryRepository
}

func NewCountryController(r domain.CountryRepository) CountryController {
	return &countryController{r}
}
