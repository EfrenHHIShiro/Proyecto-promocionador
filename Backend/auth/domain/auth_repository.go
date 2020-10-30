package domain

import (
	"context"
)

type AuthRepository interface {
	LoginWeb(ctx context.Context, objeto *LoginWeb) (*AuthenticateWeb, error)
	LoginBusiness(ctx context.Context, objeto *LoginBusiness) (*AuthenticateBusiness, error)
	LoginUser(ctx context.Context, objeto *LoginUser) (*AuthenticateUsers, error)
	RegisterWeb(ctx context.Context, objeto *RegisterWeb) error
	RegisterBusiness(ctx context.Context, objeto *RegisterBusiness) error
	RegisterUser(ctx context.Context, objeto *RegisterUser) error
	ActiveUserAccount(ctx context.Context, id string) error
}
