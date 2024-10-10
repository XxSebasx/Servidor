class Vehiculo{
    #marca;
    #modelo;
    #_velocidadMaxima;
    constructor(marca, modelo, velocidadMaxima){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#_velocidadMaxima = velocidadMaxima;
    }

    get_velocidadMaxima(){
        return this.#_velocidadMaxima
    }

    set_velocidadMaxima(velocidadMaxima){
        if(velocidadMaxima >= 0 && !isNaN(velocidadMaxima)){
            this.#_velocidadMaxima = velocidadMaxima;
        }else{
            console.log("La velocidad máxima debe ser un número positivo.");
        }
    }
}

class Coche extends Vehiculo {
    #nPuertas;
    constructor(marca, modelo, velocidadMaxima, nPuertas){
        super(marca, modelo, velocidadMaxima);
        this.#nPuertas = nPuertas;
    }

    get_nPuertas(){
        return this.#nPuertas;
    }

    set_nPuertas(nPuertas){
        if(nPuertas >= 0 && !isNaN(nPuertas)){
            this.#nPuertas = nPuertas;
        } else{
            console.log("El número de puertas debe ser un número entero positivo.");
        }
    }

}

class Moto extends Vehiculo {
    #tipoManillar;
    constructor(marca, modelo, velocidadMaxima, tipoManillar){
        super(marca, modelo, velocidadMaxima);
        this.#tipoManillar = tipoManillar;
    }

    setTiposManillar(tipoManillar){
        if(isNaN(tipoManillar) && tipoManillar != ""){
            this.#tipoManillar = tipoManillar;
        }else{
            console.log("El tipo de manillar debe ser una cadena de texto no vacía.")
        }
    }

    getTiposManillar(){
        return this.#tipoManillar;
    }
}

class Garaje{
    #vehiculos;
    constructor(){
        this.#vehiculos = [];
    }

    agregarVehiculo(vehiculo){
        if(vehiculo instanceof Vehiculo) {
            this.#vehiculos.push(vehiculo);
        }else{
            console.log("Solo se pueden añadir instancias de Vehiculo al garaje.")
        }
    }

    getVehiculos(){
        return this.#vehiculos;
    }
}

let coche = new Coche("Toyota","Corolla",120,4);
let moto = new Moto("BMW","SCOOTER",90,"Tracker")
let garaje = new Garaje();
garaje.agregarVehiculo(coche);
garaje.agregarVehiculo(moto);
garaje.agregarVehiculo("Hola");
console.log(garaje.getVehiculos());

coche.set_velocidadMaxima("hola");
moto.set_velocidadMaxima(150);

coche.set_nPuertas(-1);
coche.set_nPuertas(9);

moto.setTiposManillar("");
moto.setTiposManillar("Tra");

console.log(garaje.getVehiculos());
