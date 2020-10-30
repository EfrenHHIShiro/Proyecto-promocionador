package domain

import (
	"context"
)

type AuthRepository interface {
	LoginWeb(ctx context.Context, object *LoginWeb) (*AuthenticateWeb, error)
	LoginBusiness(ctx context.Context, object *LoginBusiness) (*AuthenticateBusiness, error)
	LoginUser(ctx context.Context, object *LoginUser) (*AuthenticateUsers, error)
	RegisterWeb(ctx context.Context, object *RegisterWeb) error
	RegisterBusiness(ctx context.Context, object *RegisterBusiness) error
	RegisterUser(ctx context.Context, object *RegisterUser) error
	ActiveUserAccount(ctx context.Context, id string) error
	PetitionChangePasswordUser(ctx context.Context, object *PetitionChangePasswordUser) error
	ChangePasswordUser(ctx context.Context, object *ChangePasswordUser) error
}
