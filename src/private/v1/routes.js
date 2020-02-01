const express = require('express')
const router = express.Router()
const { Route } = require('../../utils/index')
const { productController } = require('./controllers/index')

// Add a new Route object with parameters (route, method and the controller function)
const arrayOfRoutes = [
  new Route('/product/', 'GET', productController.getProducts),
  new Route('/product/:productId', 'GET', productController.getProduct),
]

const _registerArrayOfRoutes = routes => routes.forEach(routeObj => {
  const { method, route, controller } = routeObj

  const routerMethod = router[method.toLowerCase()].bind(router)

  if (typeof routerMethod !== 'function') {
    throw new Error(`Method '${method}' is not a valid express router method.`)
  }

  try {
    routerMethod(route, controller)
  } catch (error) {
    console.error(`Failed at registering route '${method} ${route}'.`, error)
  }

  return route
})

_registerArrayOfRoutes(arrayOfRoutes)

module.exports = router
