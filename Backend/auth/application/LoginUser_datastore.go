package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
	"promocionadorApi/helpers"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *authRepository) LoginUser(ctx context.Context, objeto *domain.LoginUser) (*domain.AuthenticateUsers, error) {

	var authUser *domain.AuthenticateUsers

	if err := r.db.Collection(database.CUser).FindOne(ctx, bson.M{"email": objeto.Email, "status": true}).Decode(&authUser); err != nil {
		return nil, err
	}

	if err := helpers.CheckPasswordHash(objeto.Password, authUser.Password); err != nil {
		return nil, err
	}

	update := bson.M{
		"$set": bson.M{"tokenMovil": objeto.TokenMovil},
	}

	if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, bson.M{"email": objeto.Email}, update).Err(); err != nil {
		return nil, err
	}

	return authUser, nil
}
