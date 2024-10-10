function comprobarNumero() {
    let numero = prompt("");
    if (isNaN(numero)) {
        throw new Error("No es un numero");
    }
    console.log("El número introducido es: " + numero);
}

try {
    comprobarNumero();
} catch (error) {
    console.error("Error: " + error.message)
}

