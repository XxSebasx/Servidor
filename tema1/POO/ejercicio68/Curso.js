class Curso{
    static tabla = [["JavaScript Avanzado, Duración: 4 semanas, Precio: 200"],
    ["Nombre: Node.js Básico, Duración: 3 semanas, Precio: 150"]];

    static listarCursos(){
        let tablaCursos = document.getElementById("tabla");
        tablaCursos.innerHTML = "<tr><th>Nombre del Curso</th><th>Duración</th><th>Precio</th></tr>";
        for (let i = 0; i < Curso.tabla.length; i++) {
            let fila = `<tr><td>${Curso.tabla[i][0]}</td><td>${Curso.tabla[i][1]}</td><td>${Curso.tabla[i][2]}</td></tr>`;
            tablaCursos.innerHTML += fila;
        }
    }
}

Curso.listarCursos();