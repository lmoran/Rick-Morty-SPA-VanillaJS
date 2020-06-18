const resolveRoute = route => {
  if (route != 'about') {
    if (route === '/') {
      return route
    } else if (route.length <= 3) {
      return '/:id'
    } else if (route.includes('page')) {
      return '/:pages'
    }
  }
  console.log('se fue por route: ' + route)
  return `/${route}`
  /* if (route != 'about') {
    if (route.length <= 3) {
      const valideRoute = route === '/' ? route : '/:id'
      return valideRoute
    } else if (route.includes('page')) {
      return '/:pages'
    }
  }
  return `/${route}` */
}
export default resolveRoute
