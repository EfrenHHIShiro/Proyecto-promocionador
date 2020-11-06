package application

import (
	"context"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/config/database"

	"gopkg.in/mgo.v2/bson"
)

func (r *categoryRepository) CategorysGet(ctx context.Context) ([]*domain.Category, error) {
	categorys := []*domain.Category{}
	cursor, err := r.db.Collection(database.CCategory).Find(ctx, bson.M{})
	if err != nil {
		defer cursor.Close(ctx)
		return nil, err
	}
	if err = cursor.All(ctx, &categorys); err != nil {
		return nil, err
	}

	return categorys, nil
}
