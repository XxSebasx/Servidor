function clasificarEdad(edad) {
    let clasificacion = "menor";
    if(edad >= 18 && edad <= 64) {
        clasificacion = "adulto";
    }else if(edad >= 65) {
        clasificacion = "adulto mayor";
    }

    return clasificacion;
}

let edad = parseInt(prompt("Dime tu edad"));
alert(clasificarEdad(edad));