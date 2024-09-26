function concatenarNombre(nombre,apellido) {
    return nombre + " " + apellido;
}

let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dime tu apellido");
alert("Hola, [" + concatenarNombre(nombre, apellido) + "]");