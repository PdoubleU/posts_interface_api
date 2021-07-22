const API_URL = 'https://swapi.dev/api/planets/?page='

export function generateUrl (page) {
  return API_URL.concat(page)
}
