let matriz = [["hola", "mundo"], ["adios", "mundo"]];
let cadenas = [];
for (let i = 0; i < matriz.length; i++) {
    let cadena ="";
    for (let j = 0; j < matriz.length; j++) {
        cadena += matriz[i][j] + " ";
    }
    cadenas.push(cadena);
}

console.log(cadenas);

