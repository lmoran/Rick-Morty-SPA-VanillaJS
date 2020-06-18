import Header from '../template/Header'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import getHash from '../utils/getHash'
import resolveRoute from '../utils/resolveRoute'
import Footer from '../template/Footer'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
  '/:pages': Home
}

const Router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  const footer = null || document.getElementById('footer')

  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRoute(hash)

  let render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
  footer.innerHTML = await Footer()

  const checkbox = null || document.getElementById('checkbox')
  const btnSwitch = null || document.getElementById('switch')

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark')
      btnSwitch.classList.add('active')
    } else {
      document.body.classList.remove('dark')
      btnSwitch.classList.remove('active')
    }
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true')
    } else {
      localStorage.setItem('dark-mode', 'false')
    }
  })
  if (localStorage.getItem('dark-mode') === 'true') {
    checkbox.setAttribute('checked', true)
    document.body.classList.add('dark')
    btnSwitch.classList.add('active')
  } else {
    document.body.classList.remove('dark')
    btnSwitch.classList.remove('active')
  }
}
export default Router
