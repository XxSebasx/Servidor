
let c1 = prompt("Ingrese la contraseña:");
let c2 = prompt("Ingrese otra vez la contraseña: ");

if (c1 == c2){
    alert("Contraseña correcta");
}else{
    alert("Contraseña incorrecta");
    if(c2 == null || c2 == ""){
        alert("Debes de ingresar una contraseña");
    }
}


