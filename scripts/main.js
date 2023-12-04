/**
 * **Autor:** Enrique Fernández - Campoamor Fernández
 * **GitHub:**
 */

const autoContainer = document.getElementsById('auto-container')

const mostrarResultados = (mensaje) =>{
    autoContainer.innerHTML += `<p>${mensaje}</p>`
}

class Vehiculo{
    #marca
    #modelo
    #color
    #fabricacion
    #cilindrada

    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca
        this.#modelo = modelo
        this.#color = color
        this.#fabricacion = fabricacion
        this.#cilindrada = cilindrada
    }

    get marca(){
        return this.#marca
    }

    set marca(value){
        this.#marca = value
    }

    get modelo(){
        return this.#modelo
    }

    set modelo(value){
        this.#modelo = value
    }

    get color(){
        return this.#color
    }

    set color(value){
        this.#color = value
    }

    get fabricacion(){
        return this.#fabricacion
    }

    set fabricacion(value){
        this.#fabricacion = value
    }

    get cilindrada(){
        return this.#cilindrada
    }

    set cilindrada(value){
        this.#cilindrada = value
    }
}
