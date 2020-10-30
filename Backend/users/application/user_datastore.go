package application

import (
	"promocionadorApi/users/domain"

	"go.mongodb.org/mongo-driver/mongo"
)

type userRepository struct {
	db *mongo.Database
}

func NewUserRepository(db *mongo.Database) domain.UserRepository {
	return &userRepository{db}
}
