package application

import (
	"promocionadorApi/auth/domain"

	"go.mongodb.org/mongo-driver/mongo"
)

type authRepository struct {
	db *mongo.Database
}

func NewAuthRepository(db *mongo.Database) domain.AuthRepository {
	return &authRepository{db}
}
