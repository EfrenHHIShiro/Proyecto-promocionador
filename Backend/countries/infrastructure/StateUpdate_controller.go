package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/countries/domain"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (h *countryController) StateUpdate(c echo.Context) error {
	Id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	object := &domain.State{
		CountryID: Id,
	}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.State == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.CountryRepository.StateUpdate(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, object)
}
