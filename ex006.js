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

const onError = (id) => console.log(`Error al obtener personaje ${id}`)
/* Async function */
async function obtenerPersonajes() {  

  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promesas) // Wait for promises resolution
    console.log(personajes)
  } catch(id) {
    onError(id)
  }  
}

obtenerPersonajes()
