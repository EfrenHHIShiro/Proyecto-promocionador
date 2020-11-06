package infrastructure

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"promocionadorApi/auth/domain"
	business "promocionadorApi/business/domain"
	"promocionadorApi/helpers"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (h *authController) RegisterBusiness(c echo.Context) error {
	object := &domain.RegisterBusiness{
		IsFirst: true,
		Status:  false,
		IsOpen:  false,
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
		document := &business.Document{
			ID:            primitive.NewObjectID(),
			DocumentImage: str,
			Status:        false,
		}
		object.Documents = append(object.Documents, document)
	}

	if object.Name == "" ||
		object.IDCategory == primitive.NilObjectID ||
		object.Rfc == "" ||
		object.Socialreason == "" ||
		object.Email == "" ||
		object.Cellphone == "" ||
		object.Address == "" ||
		object.Postalcode == "" ||
		object.Longitude == "" ||
		object.Latitude == "" ||
		object.Country.IDCountry == primitive.NilObjectID ||
		object.Country.IDState == primitive.NilObjectID ||
		len(object.Documents) < 2 {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err = h.AuthRepository.RegisterBusiness(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
