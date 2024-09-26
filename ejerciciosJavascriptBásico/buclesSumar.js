let suma = 0
let usuario = 1;
while (usuario != 0) {
    usuario = parseInt(prompt("Introduce un número (0 para salir):"));
    suma += usuario
}

console.log(suma);