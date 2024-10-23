class Departamento {
    #nombre
    #Empleados
    constructor(nombre) {
        this.#nombre = nombre;
        this.#Empleados = [];
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

    agregarDepartamento(ID,departamento) {
        if(this.#departamentos.has(ID)){
            throw new Error(`El departamento ${ID} ya está en uso`);
        }
        this.#departamentos.set(ID, departamento);
    }

    


}