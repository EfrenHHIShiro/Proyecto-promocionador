package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
	"promocionadorApi/helpers"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *authRepository) LoginUser(ctx context.Context, object *domain.LoginUser) (*domain.AuthenticateUsers, error) {

	var authUser *domain.AuthenticateUsers

	if err := r.db.Collection(database.CUser).FindOne(ctx, bson.M{"email": object.Email, "status": true}).Decode(&authUser); err != nil {
		return nil, err
	}

	if err := helpers.CheckPasswordHash(object.Password, authUser.Password); err != nil {
		return nil, err
	}

	if object.TokenMovil != "" {
		update := bson.M{
			"$set": bson.M{"tokenMovil": object.TokenMovil},
		}

		if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, bson.M{"email": object.Email}, update).Err(); err != nil {
			return nil, err
		}
	}

	return authUser, nil
}
