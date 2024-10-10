function comprobarAltura(altura){
    try {
        if(isNaN(altura)){
            throw new Error();
        }
    } catch (error) {
        altura = 1.80;
    }

    return true;
}

let altura = parseFloat(prompt("Dime la altura en metros"));
console.log(comprobarAltura(altura));

