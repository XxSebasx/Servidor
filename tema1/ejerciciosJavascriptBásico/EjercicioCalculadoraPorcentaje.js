function calcularPorcentaje(n, porcentaje) {
    return (n * porcentaje) / 100;
}

let numero = parseFloat(prompt("Dime el número"));
let porcentaje = parseFloat(prompt("Dime el porcentaje"));

alert("El " + porcentaje + "% de " + numero + " es " + calcularPorcentaje(numero, porcentaje));