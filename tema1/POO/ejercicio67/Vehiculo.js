class Vehiculo {
    static obtenerNumeroRuedas(){
        return "La mayoría de los vehículos tienen 4 ruedas";
    }
}

class Motocicleta extends Vehiculo {
    static obtenerNumeroRuedas(){
        return "Una motocicleta tiene 2 ruedas";
    }
}

console.log(Vehiculo.obtenerNumeroRuedas()); // Salida: La mayoría de los vehículos tienen 4 ruedas
console.log(Motocicleta.obtenerNumeroRuedas()); // Salida: Una motocicleta tiene 2 ruedas



