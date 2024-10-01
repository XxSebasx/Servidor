let edades = [12, 23, 35, 40, 16, 17, 19]
let edadesMayores = []
for (let index = 0; index < edades.length; index++) {
    if(edades[index] > 18){
        edadesMayores.push(edades[index])
    }
    
}

console.log(edadesMayores.toString())
