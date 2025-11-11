package routes

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
	"backend/controllers"
	"backend/middleware"
)

func SetupRouter() *httprouter.Router {
	router := httprouter.New()

	router.HandlerFunc(http.MethodPost, "/api/register/", controllers.Register)
	router.HandlerFunc(http.MethodPost, "/api/login", controllers.Login)

	protected := http.HandlerFunc(controllers.GetUserFromToken)
	router.Handler("GET", "/api/user", middleware.AuthMiddleware(protected))

	return router
}