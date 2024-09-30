function clasificarTriangulo(a,b,c) {
    let clasificacion = "No es un triángulo";
    if(a + b > c && a + c > b && b + c > a) {
        clasificacion = "Escaleno";
        if(a == b && b == c) {
            clasificacion = "Equilátero";
        } else if(a == b || b == c || a == c) {
            clasificacion = "Isósceles";
        }
    }

    return clasificacion;
}

let a = parseFloat(prompt("Dime el lado a del triángulo"));
let b = parseFloat(prompt("Dime el lado b del triángulo"));
let c = parseFloat(prompt("Dime el lado c del triángulo"));

alert(clasificarTriangulo(a, b, c));