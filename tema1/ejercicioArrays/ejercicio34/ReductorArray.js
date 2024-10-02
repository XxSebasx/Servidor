
function sumarNumeros(n,suma) {
    return suma + n;
}
let numeros = [10, 20, 30, 40]
console.log(numeros.reduce(sumarNumeros,0))