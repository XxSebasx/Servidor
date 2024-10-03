
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

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    static esMayorEdad(edad) {
        return edad >= 18;
    }
    
}



class Empleado extends Persona {
    #salario;
    constructor(nombre, edad, salario) {
        super(nombre, edad);
        this.#salario = salario;
    };

    mostrarSalario() {
        console.log(this.#salario)
    }

    saludar() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años. Mi salario es: " + this.#salario);
    }

    presentarPersonas(Persona) {
        Persona.saludar();
    }
}



let empleado = new Empleado("Sebastian", 21, 5000);
empleado.saludar();

