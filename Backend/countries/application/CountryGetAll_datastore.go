package application

import (
	"context"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"gopkg.in/mgo.v2/bson"
)

func (r *countryRepository) CountryGetAll(ctx context.Context) ([]*domain.Country, error) {
	countries := []*domain.Country{}
	cursor, err := r.db.Collection(database.CCountry).Find(ctx, bson.M{})
	if err != nil {
		defer cursor.Close(ctx)
		return nil, err
	}

	for cursor.Next(ctx) {
		result := &domain.Country{}
		err = cursor.Decode(&result)
		if err != nil {
			return nil, err
		}
		countries = append(countries, result)
	}

	return countries, nil
}
