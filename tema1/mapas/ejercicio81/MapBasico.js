class Vehiculo {
    #velocidadActual
    #matricula
    constructor(velocidadActual, matricula) {
        this.#velocidadActual = velocidadActual;
        this.#matricula = matricula;
    }

    getMatricula() {
        return this.#matricula;
    }

    mover(){}
}

class Coche extends Vehiculo {
    #carburante
    constructor(carburante,matricula,velocidadActual) {
        super(velocidadActual, matricula);
        this.#carburante = carburante;
    }

    mover(){
       document.write("El coche se mueve con " + this.#carburante);
    }
}



class Motocicleta extends Vehiculo {
    #cilindrada
    constructor(cilindrada,matricula,velocidadActual){
        super(velocidadActual, matricula);
        this.#cilindrada = cilindrada;
    }
    mover(){
        document.write("La motocicleta se mueve y su cilindrada es " + this.#cilindrada);
    }
}

class Concesionario{
    #vehiculos
    constructor(){
        this.#vehiculos = new Map();
    }

    agregarVehiculo(vehiculo){
        if(this.#vehiculos.has(vehiculo.getMatricula())){
            throw new Error(`El vehiculo con matricula ${vehiculo.getMatricula()} ya está en uso`);
        }
        this.#vehiculos.set(vehiculo.getMatricula(), vehiculo);
    }

    moverVehiculos(){
        for(let vehiculo of this.#vehiculos.values()){
            vehiculo.mover();
            document.write("<br>");
        }
    }
}

let concesionario = new Concesionario();

try {
    concesionario.agregarVehiculo(new Coche("Diesel", "123ABC", 105));
    concesionario.agregarVehiculo(new Motocicleta("2t", "456DEF", 110));
    concesionario.agregarVehiculo(new Coche("Gasolina", "789GHI", 120));
    concesionario.agregarVehiculo(new Motocicleta("4t", "556FFF",100));
    concesionario.moverVehiculos();
} catch (error) {
    console.error(error.message);
}

