function clasificarNotas(nota) {
    let clasificacion = "Suspendido"
    if(nota >= 50 && nota <= 74) {
        clasificacion = "Aprobado"
    }else if(nota >= 75 && nota <= 89) {
        clasificacion = "Notable"
    }else if(nota >= 90){
        clasificacion = "Sobresaliente"
    }

    return clasificacion;
}

let nota = parseFloat(prompt("Dime tu nota"));
alert(clasificarNotas(nota));