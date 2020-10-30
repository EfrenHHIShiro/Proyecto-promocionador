package application

import (
	"promocionadorApi/categorys/domain"

	"go.mongodb.org/mongo-driver/mongo"
)

type categoryRepository struct {
	db *mongo.Database
}

func NewCategoryRepository(db *mongo.Database) domain.CategoryRepository {
	return &categoryRepository{db}
}
