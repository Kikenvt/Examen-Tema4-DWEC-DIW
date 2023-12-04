/**
 * **Autor:** Enrique Fernández - Campoamor Fernández
 * **GitHub:**
 */

const autoContainer = document.getElementById("resultadoContainer")

const mostrarResultados = (mensaje) => {
  autoContainer.innerHTML += `<p>${mensaje}</p>`
}

class Vehiculo {
  #marca
  #modelo
  #color
  #fabricacion
  #cilindrada

  constructor(marca, modelo, color, fabricacion, cilindrada) {
    this.#marca = marca
    this.#modelo = modelo
    this.#color = color
    this.#fabricacion = fabricacion
    this.#cilindrada = cilindrada
  }

  mostrarDatos() {
    const datos = `-Marca: ${this.#marca}<br>
                       -Modelo: ${this.#modelo}<br>
                       -Color: ${this.#color}<br>
                       -Fabricación: ${this.#fabricacion}<br>
                       -Cilindrada: ${this.cilindrada}<br>`
    mostrarResultados(datos)
  }

  arrancar(){
    const arrancar = `El vehículo ${this.marca} ${this.modelo} ha arrancado`
    mostrarResultados(arrancar)
  }

  frenar(){
    const frenar = `El vehículo ${this.marca} ${this.modelo} ha parado`
    mostrarResultados(frenar)
  }

  acelerar(velocidad){
    const acel = `El vehículo ${this.marca} ${this.modelo} ha acelerado hasta los ${velocidad}km/h`
    mostrarResultados(acel)
  }

  get marca() {
    return this.#marca
  }

  set marca(value) {
    this.#marca = value
  }

  get modelo() {
    return this.#modelo
  }

  set modelo(value) {
    this.#modelo = value
  }

  get color() {
    return this.#color
  }

  set color(value) {
    this.#color = value
  }

  get fabricacion() {
    return this.#fabricacion
  }

  set fabricacion(value) {
    this.#fabricacion = value
  }

  get cilindrada() {
    return this.#cilindrada
  }

  set cilindrada(value) {
    this.#cilindrada = value
  }
}

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, 2400)

vehiculo1.mostrarDatos()
vehiculo1.acelerar(140)
vehiculo1.arrancar()
vehiculo1.frenar()