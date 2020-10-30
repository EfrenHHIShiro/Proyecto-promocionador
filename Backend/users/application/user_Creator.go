package application

import (
	"context"
	"fmt"
)

func (r *userRepository) UserCreator(ctx context.Context) (int, error) {
	fmt.Println("no mames funciono")
	return 1, nil
}
