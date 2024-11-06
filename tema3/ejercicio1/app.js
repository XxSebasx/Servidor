const express = require('express');

const app = express();

const PORT = 3000;

const libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
    { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605 },
    { id: 3, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', año: 2001 },
];
  

app.get('/', (req, res) => {
  res.send('Bienvenido a la libreria telegrafia');
});

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    let libroEncontrado = null;
    let id = parseInt(req.params.id);
    libros.forEach(libro => {
        if(libro.id === id) {
            libroEncontrado = libro;
            return;
        }
    });
    res.json(libroEncontrado);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


