package domain

import "context"

type CountryRepository interface {
	CountryCreator(ctx context.Context, object *Country) error
	CountryDelete(ctx context.Context, id string) error
	CountryGetAll(ctx context.Context) ([]*Country, error)
	CountryUpdate(ctx context.Context, object *Country) error
	StateCreator(ctx context.Context, object *State) error
	StateDelete(ctx context.Context, object *State) error
	StateUpdate(ctx context.Context, object *State) error
}
