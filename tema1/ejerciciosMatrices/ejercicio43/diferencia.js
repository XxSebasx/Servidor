let lista = [[54, 65], [2, 3], [5, 7], [55, 66]];

function calcularDiferencia(coordenada1, coordenada2) {
    return Math.sqrt((coordenada2[0] - coordenada1[0])**2 + (coordenada2[1] - coordenada1[1])**2)
}


function encontrarMasCercanas(matriz) {
    let listaCercanas = [];
    let posicionMinimo = Number.MAX_VALUE;
    for (let i = 0; i < matriz.length -1; i++) {
        for (let j = i + 1; j < matriz.length; j++) {
            let d = calcularDiferencia(matriz[i], matriz[j]);
            if(d < posicionMinimo) {
                posicionMinimo = d;
                listaCercanas = [matriz[i], matriz[j]];
            }
        }

    }
    return listaCercanas;
}

function ordenarMasCercanasCero(matriz) {
    let listaCercanas = [];
    let distancias = []; 

    for (let i = 0; i < matriz.length; i++) {
        let distancia = calcularDiferencia(matriz[i], [0, 0]);
        distancias.push([matriz[i], distancia]);
    }

    distancias.sort();

    for (let i = 0; i < distancias.length; i++) {
        listaCercanas.push(distancias[i][0]);
    }

    return listaCercanas;
}



let lista2 = [[7,444],[1,1],[8888,7]];

console.log(lista2.sort());



