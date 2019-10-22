var victor = {
  nombre: 'Victor',
  altura: 1.68,
  libros: 5
}

var jordan = {
  nombre: 'Joran',
  altura: 1.95,
  libros: 20
}

var maria = {
  nombre: 'Maria',
  altura: 1.86,
  libros: 2
}

var paty = {
  nombre: 'Patricia',
  altura: 1.57,
  libros: 7
}

var personas = [victor, jordan, maria, paty]

const esAlta = ({altura}) => altura >= 1.85
const toCms = persona => ({...persona, altura: persona.altura * 100})
const cantidad = (acum, {libros}) => acum += libros

console.log('Personas:', personas)
console.log('Personas altas:', personas.filter(esAlta))
console.log('Centimetros:', personas.map(toCms))
console.log('Cantidad de libros:', personas.reduce(cantidad, 0))
