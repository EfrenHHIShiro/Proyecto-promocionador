package infrastructure

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"promocionadorApi/auth/domain"
	"promocionadorApi/helpers"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (h *authController) RegisterBusiness(c echo.Context) error {
	object := &domain.RegisterBusiness{
		IsFirst: true,
		Status:  false,
	}

	data := c.FormValue("data")
	if err := json.Unmarshal([]byte(data), object); err != nil {
		fmt.Println(err)
	}

	form, err := c.MultipartForm()
	if err != nil {
		return err
	}

	files := form.File["files"]
	for _, file := range files {
		str, err := helpers.Upload(file)
		if err != nil {
			return err
		}
		document := &domain.Document{
			ID:            primitive.NewObjectID(),
			DocumentImage: str,
			Status:        false,
		}
		object.Documents = append(object.Documents, document)
	}

	// if object.Email == "" ||
	// 	object.Roleid == 0 ||
	// 	object.Resourcedata.Firstname == "" ||
	// 	object.Resourcedata.Lastname == "" ||
	// 	object.Resourcedata.Personalemail == "" {
	// 	return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	// }

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err = h.AuthRepository.RegisterBusiness(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
