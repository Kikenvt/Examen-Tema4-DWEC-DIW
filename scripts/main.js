/**
 * **Autor:** Enrique Fernández - Campoamor Fernández
 * **GitHub:**
 */

import { Vehiculo } from "./Vehiculo.js"

const autoContainer = document.getElementById("resultadoContainer")

export const mostrarResultados = (mensaje) => {
  autoContainer.innerHTML += `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, 2400)

vehiculo1.mostrarDatos()
vehiculo1.acelerar(140)
vehiculo1.arrancar()
vehiculo1.frenar()