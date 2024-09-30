function calcularIVA(precio, porcentaje){
    let iva = precio * (porcentaje / 100);
    return precio + iva;
}

let precio = parseFloat(prompt("Dime el precio"))
let porcentaje = parseFloat(prompt("Dime el porcentaje del IVA"))
alert(calcularIVA(precio,porcentaje))

 




 