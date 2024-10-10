function reintentarDivision(a,b) {
    if(a == 0 || b == 0){
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

for (let i = 0; i < 3; i++) {
    try {
        let a = parseInt(prompt())
        let b = parseInt(prompt());
        console.log(reintentarDivision(a, b));
        break;
    } catch (error) {
        alert(error.message);
    }
}
   


