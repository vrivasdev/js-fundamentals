var victor = {
  nombre: 'Victor',
  altura: 1.68
}

var jordan = {
  nombre: 'Joran',
  altura: 1.95
}

var maria = {
  nombre: 'Maria',
  altura: 1.86
}

var paty = {
  nombre: 'Patricia',
  altura: 1.57
}

var personas = [victor, jordan, maria]

const esAlta = ({altura}) => altura >= 1.85
const toCms = persona => ({...persona, altura: persona.altura * 100})

console.log('Personas:', personas)
console.log('Personas altas:', personas.filter(esAlta))
console.log('Centimetros:', personas.map(toCms))
