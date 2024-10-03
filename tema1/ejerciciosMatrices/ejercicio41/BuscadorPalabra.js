function buscarPalabra(matriz,palabra) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] == palabra) {
                return "fila: " + i + " Columna: " + j;
            }
        }
        
    }
}

let matriz = [["hola", "mundo"], ["adios", "mundo"]];
console.log(buscarPalabra(matriz,"hola"));
