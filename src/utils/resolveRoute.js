const resolveRoute = route => {
  if (route.length <= 3) {
    const valideRoute = route === '/' ? route : '/:id'
    return valideRoute
  }
  return `/${route}`
}
export default resolveRoute
