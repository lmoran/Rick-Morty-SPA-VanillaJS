const API = 'https://rickandmortyapi.com/api/character/'
const getData = async pageOrId => {
  debugger
  const url_api = pageOrId ? `${API}${pageOrId}` : `${API}`
  try {
    const response = await fetch(url_api)
    const data = await response.json()
    return data
  } catch {
    const error = new Error()
    console.log('error', error)
  }
}
export default getData
