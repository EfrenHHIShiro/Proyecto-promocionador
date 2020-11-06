package infrastructure

import (
	"promocionadorApi/business/domain"

	"github.com/labstack/echo/v4"
)

type BusinessController interface {
	BusinessGetByCategory(c echo.Context) error
	BusinessGetById(c echo.Context) error
	BusinessApproveOrDeny(c echo.Context) error
	// BusinessNotifyErrorToOwner(c echo.Context) error
	// BusinessAddEvent(c echo.Context) error
	// BusinessAddPromotion(c echo.Context) error
	// BusinessUpdate(c echo.Context) error
	// BusinessCloseOrOpen(c echo.Context) error-
}

type businessController struct {
	domain.BusinessRepository
}

func NewBusinessController(r domain.BusinessRepository) BusinessController {
	return &businessController{r}
}
