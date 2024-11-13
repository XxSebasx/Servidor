
const express = require('express');
const app = express();
const PORT = 3000;
class Libro {
    #isbn;
    #titulo;
    #autor;

    constructor(isbn, titulo, autor) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
    }

    getIsbn() {
        return this.#isbn;
    }

    getTitulo() {
        return this.#titulo;
    }

    getAutor() {
        return this.#autor;
    }

    toString() {
        return `${this.#isbn} - ${this.#titulo} - ${this.#autor}`;
    }
}
const libros = {
    97884968: new Libro(97884968, 'El Señor de los Anillos', 'J.R.R. Tolkien'),
    1234567: new Libro(1234567, 'La Guerra de los mundos', 'H.G wells'),
    1245678: new Libro(1245678, '1984', 'George Orwell'),
}

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/libros', (req, res) => {
    let librosArray = [];
    for (let isbn in libros) {
        let libro = libros[isbn];
        librosArray.push({
            isbn: libro.getIsbn(),
            titulo: libro.getTitulo(),
            autor: libro.getAutor(),
        });
    }
    res.json(librosArray);
});

app.get('/libros/:isbn', (req, res) => {
    const isbn = parseInt(req.params.isbn);
    if (libros[isbn]) {
        let libro = libros[isbn];
        res.json({
            isbn: libro.getIsbn(),
            titulo: libro.getTitulo(),
            autor: libro.getAutor(),
        });
    } else {
        res.json({ error: 'Libro no encontrado' });
    }
});

app.post('/nuevo', (req, res) => {
    const libro = req.body;
    libros[libro.isbn] = new Libro(libro.isbn, libro.titulo, libro.autor);
    console.log(`Libro agregado: ${libro.titulo}`);
    const isbn = libro.isbn;
    const titulo = libro.titlo;
    const autor = libro.autor;
    res.json({ message: "Datos recibidos correctamente", receivedData: { isbn, titulo, autor } });
});



app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

