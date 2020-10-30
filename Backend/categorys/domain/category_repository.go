package domain

import (
	"context"
)

type CategoryRepository interface {
	CategoryCreator(ctx context.Context, object *Category) error
	CategoryDelete(ctx context.Context, id string) error
	CategorysGet(ctx context.Context) ([]*Category, error)
	CategoryUpdate(ctx context.Context, object *Category) error
}
