function contar(cadena) {
    let n = 0;
    for (let i = 0; i < cadena.length; i++) {
        n++;
    }
    return n;
}

let cadena = prompt("Dime una cadena");
alert("La cadena tiene " + contar(cadena) + " caracteres");