// app.js

// Importar Express
const express = require('express');

// Crear una instancia de la aplicación de Express
const app = express();

// Definir un puerto para el servidor
const PORT = 3000;

// Crear una ruta GET básica en la raíz "/"
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi servidor Express!');
});

// Crear una ruta adicional, por ejemplo "/about"
app.get('/about', (req, res) => {
  res.send('Esta es la página de "Acerca de".');
});

// Crear una ruta con parámetros, por ejemplo "/user/:name"
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hola, ${userName}!`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
