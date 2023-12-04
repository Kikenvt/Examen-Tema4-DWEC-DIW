import { Vehiculo } from "./Vehiculo.js"
import { mostrarResultados } from "./main.js"

export class automovilDeportivo extends Vehiculo {
  #potenciaMotor
  constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor) {
    super(marca, modelo, color, fabricacion, cilindrada)
    this.#potenciaMotor = potenciaMotor
  }

  get potenciaMotor() {
    return this.#potenciaMotor
  }

  set potenciaMotor(value) {
    this.#potenciaMotor = value
  }

  activarModoDeportivo(){
    const deport = `El modo deportivo del ${this.marca} ${this.modelo} con ${this.#potenciaMotor}cv ha sido activado`
    mostrarResultados(deport)
  }

  mostrarDatos(){
    super.mostrarDatos()
    
    const pot = `-Potencia: ${this.#potenciaMotor}cv`
    mostrarResultados(`<p>${pot}</p>`)
  }

  
}
