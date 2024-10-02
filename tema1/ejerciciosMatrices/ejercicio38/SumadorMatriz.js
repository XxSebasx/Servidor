let matriz = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]
let sumaMatriz = [] 
for (let i = 0; i < matriz.length; i++) {
        suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        sumaMatriz.push(suma);
}

console.log(sumaMatriz);



//Con un bucle
let sumaMatriz2 = []

function sumarNumeros(n,suma) {
    return suma + n;
}

for (let i = 0; i < matriz.length; i++) {
    sumaMatriz2.push(matriz[i].reduce(sumarNumeros,0));
}

console.log(sumaMatriz2);




