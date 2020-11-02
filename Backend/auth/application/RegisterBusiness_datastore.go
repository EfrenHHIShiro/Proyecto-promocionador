package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
)

func (r *authRepository) RegisterBusiness(ctx context.Context, object *domain.RegisterBusiness) error {
	result, err := r.db.Collection(database.CBusiness).InsertOne(ctx, object)
	return nil
}
