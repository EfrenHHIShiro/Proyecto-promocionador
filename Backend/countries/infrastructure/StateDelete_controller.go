package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/countries/domain"

	"github.com/labstack/echo/v4"
)

func (h *countryController) StateDelete(c echo.Context) error {
	object := &domain.State{}

	if err := c.Bind(object); err != nil {
		return err
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.CountryRepository.StateDelete(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, true)
}
