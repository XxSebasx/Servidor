function calcularPago(sueldo,pHorasExtras,nHorasExtras,porcentajeIRPF){
  let sueldoHorasExtras = pHorasExtras *  nHorasExtras;
  let sueldoBruto = sueldo + sueldoHorasExtras;
  let IRPF = sueldoBruto * (porcentajeIRPF / 100);
  sueldoBruto -= IRPF;
  return sueldoBruto;
}

let sueldoBase = parseInt(prompt("Dime el sueldo base"))
let precioHorasExtra = parseInt(prompt("Dime el precio de hora extra"))
let numeroHorasExtra = parseInt(prompt("Cantidad de horas extras"))
let porcentajeIRPF = parseInt(prompt("Porcentaje IRPF"))

alert(calcularPago(sueldoBase,precioHorasExtra,numeroHorasExtra,porcentajeIRPF))
