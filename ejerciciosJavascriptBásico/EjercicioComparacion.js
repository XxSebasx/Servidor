function compararNumeros(n1, n2) {
    mayor = 0;
    if (n1 < n2) {
        mayor = n2;
    }
    else if (n1 > n2) {
        mayor = n1;
    }

    return mayor;
}

let numero1 = parseInt(prompt("Dime el primer número"));
let numero2 = parseInt(prompt("Dime el segundo número"));

let resultado = compararNumeros(numero1, numero2);

switch (resultado) {
    case numero2:
        alert("El mayor es " + numero2);
        break;
    case numero1:
        alert("El mayor es " + numero1);
        break;
    default:
        alert("Son iguales");
        break;
}