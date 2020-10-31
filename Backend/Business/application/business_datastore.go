package application

import (
	"promocionadorApi/Business/domain"

	"go.mongodb.org/mongo-driver/mongo"
)

type businessRepository struct {
	db *mongo.Database
}

func NewBusinessRepository(db *mongo.Database) domain.BusinessRepository {
	return &businessRepository{db}
}