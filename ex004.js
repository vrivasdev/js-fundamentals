class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
console.log(sacha)

var arturo = new Desarrollador('Arturo', 'Rivas', 1.56)
console.log(arturo.saludar())
console.log(arturo.soyAlto()) 

