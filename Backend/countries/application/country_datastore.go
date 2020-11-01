package application

import (
	"promocionadorApi/countries/domain"

	"go.mongodb.org/mongo-driver/mongo"
)

type countryRepository struct {
	db *mongo.Database
}

func NewCountryRepository(db *mongo.Database) domain.CountryRepository {
	return &countryRepository{db}
}
