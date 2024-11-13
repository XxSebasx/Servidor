const express = require('express');

const app = express();

const PORT = 3000;

const alumnos = {
    1: { nombre: 'Ana', edad: 20, curso: 'Ingeniería', calificaciones: [8, 9, 7] },
    2: { nombre: 'Luis', edad: 22, curso: 'Medicina', calificaciones: [10, 9, 8] },
};

// Middleware para leer los cuerpos de las solicitudes POST como JSON
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  

app.get('/alumnos', (req, res) => {
    let alumnosArray = [];
    for (let key in alumnos) {
        let alumno = alumnos[key];
        let alumnosJson = {
            nombre: alumno.nombre,
            curso: alumno.curso,
        };
        alumnosArray.push(alumnosJson);
    }
    res.json(alumnosArray);
});

app.get('/alumnos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (alumnos[id]) {
        res.json({
            nombre: alumnos[id].nombre,
            curso: alumnos[id].curso,
            calificaciones: alumnos[id].calificaciones,
        });
    } else {
        res.json({ error: 'Alumno no encontrado' });
    }
});

app.post('/alumnos', (req, res) => {
    let alumno = req.body;
    alumnos[alumno.id] = alumno;
    console.log(`Alumno agregado: ${alumno}`);
    res.json({ message: 'Alumno agregado correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
