package main

import (
	"context"
	"io"
	"log"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetLongMessage() string {
	resp, err := http.Get("https://www.baidu.com/")
	if err != nil {
		log.Println(err.Error())
	}
	defer resp.Body.Close()
	str, _ := io.ReadAll(resp.Body)
	return string(str)
}
