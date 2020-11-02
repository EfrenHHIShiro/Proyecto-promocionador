package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/countries/domain"

	"github.com/labstack/echo/v4"
)

func (h *countryController) CountryCreator(c echo.Context) error {
	object := &domain.Country{}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.CountryName == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	err := h.CountryRepository.CountryCreator(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, object)
}
