class Persona {
    #nombre
    #edad
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }
}

let mapa = new Map();

function mostrarDatos(clave) {
    if (!mapa.has(clave)) {
        throw new Error("No se ha encontrado el ID");
    }
    let datos = mapa.get(clave);
    console.log(datos);
}

function aniadirPersona(ID, persona) {
    if (mapa.has(ID)) {
        throw new Error("ID ya existente");
    } else {
        mapa.set(ID, persona);
    }
}

try {
    aniadirPersona("124A", new Persona("Sebastian", 21))
    aniadirPersona("66D", new Persona("David", 23))
    aniadirPersona("77E", new Persona("Emilio", 24))
    mostrarDatos("124A")
    aniadirPersona("55C", new Persona("Maria", 20))
    mostrarDatos("55C");
} catch (error) {
    console.error(error.message);
}
