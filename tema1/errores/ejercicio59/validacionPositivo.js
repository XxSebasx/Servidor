function validacionPositivo(n) {
    if(n < 0){
        throw new Error("El número debe ser positivo.");
    }

    return true;
}

let numero = parseInt(prompt("Dime un número"));

try {
    console.log(validacionPositivo(numero));
} catch (error) {
    console.error(error.message);
}


