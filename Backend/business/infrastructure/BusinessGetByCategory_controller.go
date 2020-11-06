package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/business/domain"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/labstack/echo/v4"
)

func (h *businessController) BusinessGetByCategory(c echo.Context) error {
	object := &domain.PeticionUser{}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.IDCategory == primitive.NilObjectID ||
		object.IDCountry == primitive.NilObjectID ||
		object.IDState == primitive.NilObjectID {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	result, err := h.BusinessRepository.BusinessGetByCategory(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, result)
}
