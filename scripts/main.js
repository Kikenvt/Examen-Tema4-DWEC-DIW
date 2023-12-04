/**
 * **Autor:** Enrique Fernández - Campoamor Fernández
 * **GitHub:**
 */

import { Vehiculo } from "./Vehiculo.js"
import { automovilDeportivo } from "./automovilDeportivo.js"

// Vinculamos el elemento del HTML donde mostraremos los datos
const autoContainer = document.getElementById("resultadoContainer")

// Creamos una funcion para mostrar los datos en el HTML que exportaremos para utilizar tambien en las clases
export const mostrarResultados = (mensaje) => {
  autoContainer.innerHTML += `<p>${mensaje}</p>`
}

// Creamos una instancia vehiculo y mostramos los datos
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, 2400)
mostrarResultados('----Vehiculo 1----')
vehiculo1.mostrarDatos()
vehiculo1.arrancar()
vehiculo1.acelerar(140)
vehiculo1.frenar()

// Lo transformamos a un tipo Object

const vehiculoObject= {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    fabricacion: vehiculo1.fabricacion,
    cilindrada: vehiculo1.cilindrada    
}

// Con este metodo lo almacenamos en el localStorage
// Si implementamos el metodo toJSON comentado en la clase vehiculo podríamos obviar el declarar el vehiculoObjetc y directamente almacenarlo de la siguiente manera:
// localStorage.setItem('vehiculo', JSON.stringify(vehiculo1))

localStorage.setItem('vehiculo', JSON.stringify(vehiculoObject))

//Con este metodo recuperamos el JSON almacenado en el localStorage y con JSON.parse lo convertimos a un objeto.
const vehiculoStored = JSON.parse(localStorage.getItem('vehiculo'))
console.log(vehiculoStored)

// Creamos una instancia de automovilDeportivo y mostramos los datos
const deportivo1 = new automovilDeportivo('Ferrari', 'Spider', 'amarillo', 2020, 4000, 500)

mostrarResultados('----Vehiculo Deportivo----')
deportivo1.mostrarDatos()
deportivo1.arrancar()
deportivo1.acelerar(140)
deportivo1.frenar()

// Al igual que con vehiculo lo transformamos en un tipo Object
const deportivoObjet = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    fabricacion: deportivo1.fabricacion,
    cilindrada: deportivo1.cilindrada,
    potencia: deportivo1.potenciaMotor
}

// En este caso vamos a crear un bucle para guardar cada propiedad como un dato independiente en el localStorage

for (let key in deportivoObjet) {
    if (deportivoObjet.hasOwnProperty(key)) {
        localStorage.setItem(key, deportivoObjet[key]);   
    }
}
// Dejo comentados los siguenter metodos para:
// Eliminar un Item del localStorage
//localStorage.removeItem('potencia')
// Vaciar por completo el localStorage
// localStorage.clear()