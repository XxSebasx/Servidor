function contarElementos(matriz,valor) {
    let contador = 0;
    let decimal = valor.split(',');
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] == parseInt(decimal[0]) && matriz[i][j +1] == parseInt(decimal[1])){
                contador++;
                break;
            }
        }
    }
    return contador;
}


function ordenarElementos(params) {
    
}
let matriz  = [[54,65],[2,3],[5,7],[2,3],[2,5],[4,3],[3,2],[3,4]]

document.write(contarElementos(matriz, "2,3"));
