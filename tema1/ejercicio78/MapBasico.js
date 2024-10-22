class Persona {
    #nombre
    #edad
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }
}

let mapa = new Map([
    ["124A", new Persona("Sebastian", 21)],
    ["33B", new Persona("Juan", 18)],
    ["49L", new Persona("Lucia", 22)]
]);


function mostrarDatos(clave) {
    if (!mapa.has(clave)) {
        console.log(`El ${clave} no está en uso`);
    }
    let datos = mapa.get(clave);
    console.log(datos);
}

function aniadirPersona(ID, persona) {
    if (mapa.has(ID)) {
        console.log(`El ${ID} ya está en un uso`);
    } else {
        mapa.set(ID, persona);
    }
}

mostrarDatos("33B")

aniadirPersona("55C", new Persona("Maria", 20))

mostrarDatos("55C");
