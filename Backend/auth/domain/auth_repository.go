package domain

import (
	"context"
)

type AuthRepository interface {
	// Staff
	LoginWeb(ctx context.Context, object *LoginWeb) (*AuthenticateWeb, error)
	RegisterWeb(ctx context.Context, object *RegisterWeb) error
	// Business
	LoginBusiness(ctx context.Context, object *LoginBusiness) (*AuthenticateBusiness, error)
	RegisterBusiness(ctx context.Context, object *RegisterBusiness) error
	// Users
	LoginUser(ctx context.Context, object *LoginUser) (*AuthenticateUsers, error)
	RegisterUser(ctx context.Context, object *RegisterUser) error
	ActiveUserAccount(ctx context.Context, object *ActiveUserAccount) (string, error)
	CheckPinUserMovile(ctx context.Context, object *CheckUserAccount) error
	PetitionChangePasswordUser(ctx context.Context, object *PetitionChangePasswordUser) error
	ChangePasswordUser(ctx context.Context, object *ChangePasswordUser) error
}
