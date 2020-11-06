package helpers

import (
	"github.com/vonage/vonage-go-sdk"
)

const (
	API_SECRET = "gltb3fbBUB7SRp1B"
	API_KEY    = "6b48063e"
	BRAND      = "BarUsers"
)

func SendSmsPinCode(number string) (vonage.VerifyRequestResponse, vonage.VerifyErrorResponse, error) {
	auth := vonage.CreateAuthFromKeySecret(API_KEY, API_SECRET)
	verifyClient := vonage.NewVerifyClient(auth)

	response, errResp, err := verifyClient.Request(number, BRAND, vonage.VerifyOpts{CodeLength: 6, Lg: "es-es", WorkflowID: 4})

	return response, errResp, err
}

func VerifyPinCode(requestID string, pinCode string) (vonage.VerifyCheckResponse, vonage.VerifyErrorResponse, error) {
	auth := vonage.CreateAuthFromKeySecret(API_KEY, API_SECRET)
	verifyClient := vonage.NewVerifyClient(auth)

	response, errResp, err := verifyClient.Check(requestID, pinCode)

	return response, errResp, err
}
