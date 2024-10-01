let numeros = [10, 20, 30, 40]
function sumarNumeros(n,suma) {
    return suma + n;
}
console.log(numeros.reduce(sumarNumeros,0))