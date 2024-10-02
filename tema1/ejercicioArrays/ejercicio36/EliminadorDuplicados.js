function eliminarDuplicados(lista) {
    let listaSinDuplicados = [];
    for (let index = 0; index < lista.length; index++) {
        if (!listaSinDuplicados.includes(lista[index])) {
            listaSinDuplicados.push(lista[index]);
        }
    }
    return listaSinDuplicados;
}

console.log(eliminarDuplicados([3, 5, 3, 7, 5, 9]).toString()); 