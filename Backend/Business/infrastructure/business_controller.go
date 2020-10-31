package infrastructure

import (
	"promocionadorApi/Business/domain"
)

type BusinessController interface {
}

type businessController struct {
	domain.BusinessRepository
}

func NewBusinessController(r domain.BusinessRepository) BusinessController {
	return &businessController{r}
}
