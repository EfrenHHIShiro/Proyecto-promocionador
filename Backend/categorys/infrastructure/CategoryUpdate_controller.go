package infrastructure

import (
	"context"
	"encoding/json"
	"net/http"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/helpers"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/labstack/echo/v4"
)

func (h *categoryController) CategoryUpdate(c echo.Context) error {
	id := c.Param("id")
	image, _ := c.FormFile("Image")
	data := c.FormValue("data")

	Id, _ := primitive.ObjectIDFromHex(id)
	object := &domain.Category{
		ID: Id,
	}
	err := json.Unmarshal([]byte(data), object)
	if err != nil {
		return err
	}

	if image != nil {
		object.Image, err = helpers.Upload(image)
		if err != nil {
			return err
		}
	}

	if object.CategoryName == "" || object.Image == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	err = h.CategoryRepository.CategoryUpdate(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, object)
}
