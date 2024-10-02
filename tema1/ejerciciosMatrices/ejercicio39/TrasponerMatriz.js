let matriz = [[1,2,3],[4,5,6],[7,8,9]];
let traspuestaMatriz = []

for (let i = 0; i < matriz.length; i++) {
    let fila = [];
    for (let j = 0; j < matriz[i].length; j++) {
        fila.push(matriz[j][i]);
    }
    traspuestaMatriz.push(fila);
}

for (let i = 0; i < traspuestaMatriz.length; i++) {
    console.log(traspuestaMatriz[i]);
}