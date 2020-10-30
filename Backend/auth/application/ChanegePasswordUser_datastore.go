package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
	"promocionadorApi/helpers"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *authRepository) ChangePasswordUser(ctx context.Context, object *domain.ChangePasswordUser) error {

	id := helpers.Decrypt(object.IdEncrypt)

	object.ID, _ = primitive.ObjectIDFromHex(id)
	object.HashPassword()

	update := bson.M{
		"$set": bson.M{"password": object.Password},
	}

	if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, bson.M{"_id": object.ID}, update).Err(); err != nil {
		return err
	}

	return nil
}
