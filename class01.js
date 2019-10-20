var victor = {
  nombre: 'Victor',
  apellido: 'Rivas',
  edad: 33
}

var patricia = {
  nombre: 'Patricia',
  apellido: 'Flores',
  edad: 40
}

function mostrarMayuscula(persona){
  return {...persona, edad: persona.edad + 1}
}

var nuevoVictor = mostrarMayuscula(victor)
console.log(nuevoVictor)
console.log(victor)
