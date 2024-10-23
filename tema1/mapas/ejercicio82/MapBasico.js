class Instrumento{
    #tipo;
    constructor(tipo){
        this.#tipo = tipo;
    }
    getTipo(){
        return this.#tipo;
    }
    tocar(){}
}

class Guitarra extends Instrumento{
    constructor(tipo){
        super(tipo);
    }

    tocar(){
        document.write("Strum, strum...");
    }
}

class Piano extends Instrumento{
    constructor(tipo){
        super(tipo);
    }
    tocar(){
        document.write("Ding, dong...");
    }
}

class Orquesta{
    #instrumentos;
    constructor(){
        this.#instrumentos = new Map();
    }

    agregarInstrumento(ID, instrumento){
        if(this.#instrumentos.has(ID)){
            throw new Error(`El instrumento ${ID} ya está en uso`);
        }
        this.#instrumentos.set(ID, instrumento);
    }

    tocarInstrumentos(){
        for(let instrumento of this.#instrumentos.values()){
            instrumento.tocar();
            document.write("<br>");
        }
    }
}

let orquesta = new Orquesta();

try {
    orquesta.agregarInstrumento("G1", new Guitarra("Guitarra electrica"));
    orquesta.agregarInstrumento("P1", new Piano("Piano de cola"));
    orquesta.agregarInstrumento("G2", new Guitarra("Guitarra acustica"));
    orquesta.agregarInstrumento("P2", new Piano("Piano electrico"));
    orquesta.tocarInstrumentos();
} catch (error) {
    console.error(error.message);
}