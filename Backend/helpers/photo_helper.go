package helpers

import (
	"io"
	"mime/multipart"
	"os"
)

func Upload(file *multipart.FileHeader) (string, error) {
	src, err := file.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()

	dst, err := os.Create("./helpers/images/" + file.Filename)
	if err != nil {
		return "", err
	}
	defer dst.Close()
	if _, err = io.Copy(dst, src); err != nil {
		return "", err
	}
	filenameFinal := "http://localhost:8080/helpers/images/" + file.Filename
	return filenameFinal, nil
}
