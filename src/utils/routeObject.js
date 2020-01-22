exports.Route = function (route, method, controller) {
  if (typeof route !== 'string') {
    throw new Error('Route property is not valid or not provided.')
  }

  if (typeof method !== 'string') {
    throw new Error(`Method '${method}' is not a valid express router method on route '${route}'.`)
  }

  if (typeof controller !== 'function') {
    throw new Error(`Controller for  '${method} ${route}' is not valid or not provided.`)
  }

  this.method = method
  this.route = route
  this.controller = controller
}
