package domain

import "context"

type BusinessRepository interface {
	BusinessGetByCategory(ctx context.Context, object *PeticionUser) ([]*BusinessByCatagory, error)
	BusinessGetById(ctx context.Context, id string) (*BusinessGetByID, error)
	BusinessApproveOrDeny(ctx context.Context, object *BusinessApproveOrDeny) error
}
