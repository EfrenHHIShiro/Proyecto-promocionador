package domain

import "context"

type UserRepository interface {
	UserCreator(ctx context.Context) (int, error)
}
