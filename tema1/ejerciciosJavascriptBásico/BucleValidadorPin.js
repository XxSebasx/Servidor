let validate = false;
let PINCorrect = 1234;
let PIN;
for (let i = 0; i < 3; i++) {
    PIN = parseInt(prompt("Introduce tu PIN"));
    if (PIN == PINCorrect) {
        validate = true;
        break;
    }
}

if (validate) {
    alert("PIN correcto");
}else {
    alert("Acceso denegado");
}