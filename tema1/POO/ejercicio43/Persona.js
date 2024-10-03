class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    };

    saludar() {
        console.log(this.nombre + " " + this.edad);
    };

    getnombre() {
        return this.#nombre;
    }

    setedad(edadNueva) {
        this.#edad = edadNueva;
    }
    
}


let persona = new Persona("Sebastian", 21);
persona.saludar();

