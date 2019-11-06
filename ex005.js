const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const obtenerPersonaje = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    fetch(url)
      .then(data => resolve(data.json()))
      .catch(() => reject(id))
  })
}

const error = (id) => console.log(`Error al obtener personake ${id}`)

obtenerPersonaje(1)
  .then(personaje => console.log(`El personaje 1 es ${personaje.name}`))
  .catch(error)
