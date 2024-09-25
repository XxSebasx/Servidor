function verificarAcceso(usuario, edad, cuentaRegistrada) {
    if(edad >= 18) {
        if(cuentaRegistrada == usuario) {
            alert("Acceso concedido");
        }else{
            alert("Registrate primero");
        }
    }else{
        alert("Acceso denegado");
    }
}


let usuario = prompt("Dime tu nombre de usuario");
let edad = parseInt(prompt("Dime tu edad"));
verificarAcceso(usuario, edad, );