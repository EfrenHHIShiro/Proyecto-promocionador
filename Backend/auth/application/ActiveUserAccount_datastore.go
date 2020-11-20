package application

import (
	"context"
	"errors"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *authRepository) ActiveUserAccount(ctx context.Context, object *domain.ActiveUserAccount) (string, error) {

	update := bson.M{
		"$set": object,
	}

	conditions := bson.M{"cellphone": object.CellPhoneNew}
	filterID := bson.M{"_id": object.ID}

	if err := r.db.Collection(database.CUser).FindOne(ctx, conditions).Decode(&object); err != nil {
		if err := r.db.Collection(database.CUser).FindOne(ctx, filterID).Decode(&object); err != nil {
			err = errors.New("El usuario no existe.")
			return "", err
		}

		if object.Status == false && object.CellPhone == "" {
			object.CellPhone = object.CellPhoneNew
			if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, filterID, update).Err(); err != nil {
				return "", err
			}
		} else {
			if object.Status == true {
				return "", errors.New("Este usuario ya esta activado.")
			}
			if object.CellPhone != object.CellPhoneNew {
				return "", errors.New("Ya contine un numero diferente de telefono.")
			}
		}
	} else {
		if object.Status == true {
			return "", errors.New("Este usuario ya esta activado.")
		}
	}

	// send sms to cellphone personal.
	// response, errResp, err := helpers.SendSmsPinCode(object.CellPhone)
	// if err != nil {
	// 	return "", err
	// } else if response.Status != "0" {
	// 	fmt.Println("Error status " + errResp.Status + ": " + errResp.ErrorText)
	// 	return "", err
	// }

	// return response.RequestId, nil
	return "simulador", nil

}
