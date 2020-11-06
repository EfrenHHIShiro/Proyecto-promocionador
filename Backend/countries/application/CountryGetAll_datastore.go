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

	if err = cursor.All(ctx, &countries); err != nil {
		return nil, err
	}

	return countries, nil
}
