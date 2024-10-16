class Jugador {
    #nombre;
    #posicion;
    #numero;
    constructor(nombre, posicion, numero) {
        this.#nombre = nombre;
        this.#posicion = posicion;
        this.#numero = numero;
    }

    getPosicion() {
        return this.#posicion;
    }

    getNombre(){
        return this.#nombre;
    }

    toString() {
        return this.#nombre + " (" + this.#posicion + ")";
    }
}

class EquipoDeportivo {
    static jugadores = [];
    static agregarJugador(jugador) {
        EquipoDeportivo.jugadores.push(jugador);
    }
    static listarJugadores() {
        for (let i = 0; i < EquipoDeportivo.jugadores.length; i++) {
            console.log(EquipoDeportivo.jugadores[i].toString());
        }
    }
}

class Futbol extends EquipoDeportivo {
    static filtrarPorPosicion(posicion) {
        super.jugadores.forEach(jugador => {
            if(jugador.getPosicion() == posicion){
                console.log(jugador.getNombre() + " " + jugador.getPosicion());
            }
        });
    }
}

EquipoDeportivo.agregarJugador(new Jugador("Juan", "Delantero", 9));
EquipoDeportivo.agregarJugador(new Jugador("Pedro","Portero",1));
EquipoDeportivo.listarJugadores();
// Salida: Juan (Delantero), Pedro (Portero)

Futbol.filtrarPorPosicion("Portero");
// Salida: Pedro (Portero)
