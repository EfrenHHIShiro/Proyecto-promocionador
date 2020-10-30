package infrastructure

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/helpers"

	"github.com/labstack/echo/v4"
)

func (h *categoryController) CategoryCreator(c echo.Context) error {
	object := &domain.Category{}

	image, err := c.FormFile("Image")
	data := c.FormValue("data")
	if err != nil {
		return err
	}

	err = json.Unmarshal([]byte(data), object)
	if err != nil {
		fmt.Println(err)
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

	err = h.CategoryRepository.CategoryCreator(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, object)
}
