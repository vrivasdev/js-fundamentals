class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }
  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn){
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`)
    if (fn) {
      fn(nombre, apellido,true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`No sabia que eras programador`)
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var arturo = new Desarrollador('Arturo', 'Rivas', 1.56)

console.log(sacha.saludar(responderSaludo))
console.log(arturo.saludar(responderSaludo)) 

