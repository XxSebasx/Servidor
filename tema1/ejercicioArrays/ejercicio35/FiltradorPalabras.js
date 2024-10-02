function filtrarPalabrasLargas(lista) {
    let nuevaLista = [];
    for (let index = 0; index < lista.length; index++) {
        let palabra = lista[index];
        if(palabra.length > 5) {
            nuevaLista.push(palabra);
        }
    }
    return nuevaLista;
}

let lista = ['hola', 'javascript', 'clase', 'expresiones']
console.log(filtrarPalabrasLargas(lista).toString());