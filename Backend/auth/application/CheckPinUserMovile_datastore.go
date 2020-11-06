package application

import (
	"context"
	"errors"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
	"promocionadorApi/helpers"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *authRepository) CheckPinUserMovile(ctx context.Context, object *domain.CheckUserAccount) error {

	response, _, err := helpers.VerifyPinCode(object.RequestID, object.PinCode)

	if err != nil {
		return err
	} else if response.Status != "0" {
		return errors.New("Huvo un problema con el pin enviado, porfavor de revisarlo.")
	} else {
		object.Status = true
		update := bson.M{
			"$set": object,
		}
		if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, bson.M{"_id": object.ID}, update).Err(); err != nil {
			return err
		}
	}
	return nil
}
