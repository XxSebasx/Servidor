
let temperaturasC = [0, 10, 20, 30, 40];
let temperaturasF = temperaturasC.map(convertir)

function convertir(c) {
  return c * 9/5 + 32;
}

console.log(temperaturasF);