function buscarParecidos(array) {
    let p1 = 0
    let p2 = 0
    let diferencia = Number.MAX_VALUE;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let resta = Math.abs((array[i] - array[j]));
            if(resta < diferencia){
                diferencia = resta
                p1 = array[i];
                p2 = array[j];
            }  
        }

    }
    return [p1, p2];
}


function buscarDiferentes(array) {
    let p1 = 0
    let p2 = 0
    let diferencia = Number.MIN_VALUE;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let resta = Math.abs((array[i] - array[j]));
            if(resta > diferencia){
                diferencia = resta
                p1 = array[i];
                p2 = array[j];
            }  
        }

    }
    return [p1, p2];
}


let array = [3, 5, 2, 7,9]
console.log(buscarParecidos(array));
console.log(buscarDiferentes(array));

