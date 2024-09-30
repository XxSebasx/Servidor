
function calcular() {
    var expr = document.getElementById("expression").value;
    document.getElementById("resultado").innerText = eval(expr);
}