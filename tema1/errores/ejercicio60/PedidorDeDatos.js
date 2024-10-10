function pedirDatos() {
    let nombre = prompt("Dime tu nombre:");
    if(nombre == "" || !isNaN(nombre)){
        throw new Error("Nombre invalido");
    }
    document.write("Entraste")
}

while (true) {
    try {
        pedirDatos();
        break;
    } catch (error) {
        alert(error.message);
    }
}
