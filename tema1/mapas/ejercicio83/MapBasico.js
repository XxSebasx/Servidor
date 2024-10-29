class Departamento {
    #nombre
    constructor(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

class Empleado {
    #nombre
    #puesto
    constructor(nombre, puesto) {
        this.#nombre = nombre;
        this.#puesto = puesto;
    }
}

class Empresa {
    #departamentos
    constructor() {
        this.#departamentos = new Map();
    }

    getDepartamentos() {
        return this.#departamentos;
    }

    agregarDepartamento(departamento,listaEmpleados) {
        if(this.#departamentos.has(departamento)){
            throw new Error(`El departamento ${departamento} ya existe`);
        }
        this.#departamentos.set(departamento, listaEmpleados);
    }

    agregarEmpleado(departamento, empleado) {
        if(!this.#departamentos.has(departamento)){
            throw new Error(`El departamento ${departamento.getNombre()} no existe`);
        }
        this.#departamentos.get(departamento).push(empleado);
    }
}

//main

let empresa = new Empresa();

let departamento = new Departamento("Desarrollo");
let departamento2 = new Departamento("Diseño");

let empleado1 = new Empleado("Juan", "Desarrollador");
let empleado3 = new Empleado("Pedro", "Desarrollador");

let empleado4 = new Empleado("Ana", "Diseñadora");
let empleado2 = new Empleado("Maria", "Diseñadora");

let empleado5 = new Empleado("Sebastián", "Desarrollador");


empresa.agregarDepartamento(departamento, [empleado1, empleado3]);

empresa.agregarDepartamento(departamento2, [empleado2, empleado4]);

empresa.agregarEmpleado(departamento, empleado5);

console.log(empresa.getDepartamentos());



