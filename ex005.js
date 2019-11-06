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

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(id => obtenerPersonaje(id))

Promise.all(promesas)
       .then(personajes => console.log(personajes))
       .catch(error)

/*
obtenerPersonaje(1)
  .then(personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
   })
  .then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje3 => console.log(`El personaje 3 es ${personaje3.name}`))
  .catch(error)
  */
