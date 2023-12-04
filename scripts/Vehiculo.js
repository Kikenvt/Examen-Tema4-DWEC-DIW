import { mostrarResultados } from "./main.js";


export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    constructor(marca, modelo, color, fabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos() {
        const datos = `-Marca: ${this.#marca}<br>
                       -Modelo: ${this.#modelo}<br>
                       -Color: ${this.#color}<br>
                       -Fabricación: ${this.#fabricacion}<br>
                       -Cilindrada: ${this.cilindrada}<br>`;
        mostrarResultados(datos);
    }

    arrancar() {
        const arrancar = `El vehículo ${this.marca} ${this.modelo} ha arrancado`;
        mostrarResultados(arrancar);
    }

    frenar() {
        const frenar = `El vehículo ${this.marca} ${this.modelo} ha parado`;
        mostrarResultados(frenar);
    }

    acelerar(velocidad) {
        const acel = `El vehículo ${this.marca} ${this.modelo} ha acelerado hasta los ${velocidad}km/h`;
        mostrarResultados(acel);
    }

    get marca() {
        return this.#marca;
    }

    set marca(value) {
        this.#marca = value;
    }

    get modelo() {
        return this.#modelo;
    }

    set modelo(value) {
        this.#modelo = value;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    get fabricacion() {
        return this.#fabricacion;
    }

    set fabricacion(value) {
        this.#fabricacion = value;
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    set cilindrada(value) {
        this.#cilindrada = value;
    }
}
