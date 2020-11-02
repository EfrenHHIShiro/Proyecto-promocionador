package application

import (
	"context"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *countryRepository) CountryCreator(ctx context.Context, object *domain.Country) error {
	object.State = []*domain.State{}

	result, err := r.db.Collection(database.CCountry).InsertOne(ctx, object)

	if err != nil {
		return err
	}

	object.ID = result.InsertedID.(primitive.ObjectID)
	return nil
}
