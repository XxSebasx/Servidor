
class Persona {
    #nombre;
    #edad;
    #nHijos
    constructor(nombre, edad,nHijos) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#nHijos = nHijos;
    };

    saludar() {
        console.log(this.#nombre + " " + this.#edad + " " + this.#nHijos);
    };

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    static esMayorEdad(edad) {
        return edad >= 18;
    }

    setedad(edadNueva) {
        this.#edad = edadNueva;
    }

    getnombre() {
        return this.#nombre;
    }

    setNHijos(numero) {
        if(!isNaN(numero) &&  numero > this.#nHijos){
            this.#nHijos = numero;
        }
    }

    static esMayorEdad(numero) {
        return numero >= 18;
    }

    

    
}



class Empleado extends Persona {
    #salario;
    constructor(nombre, edad, nHijos, salario) {
        super(nombre, edad,nHijos,);
        this.#salario = salario;
    };

    mostrarSalario() {
        console.log(this.#salario)
    }

    saludar() {
        console.log(super.saludar() + " Mi salario es: " + this.#salario);
    }

    presentarPersonas(Persona) {
        Persona.saludar();
    }
    
}



let empleado = new Empleado("Sebastian",21,1,1300);
empleado.saludar();
let persona = new Persona("Maria",22,2);
empleado.presentarPersonas(persona);

console.log(Persona.esMayorEdad(21)); // true

