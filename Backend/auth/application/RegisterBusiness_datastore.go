package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
)

func (r *authRepository) RegisterBusiness(ctx context.Context, object *domain.RegisterBusiness) error {
	_, err := r.db.Collection(database.CBusiness).InsertOne(ctx, object)
	if err != nil {
		return err
	}

	// Send Email to Owner of business

	return nil
}
