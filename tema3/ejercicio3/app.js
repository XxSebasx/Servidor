const express = require('express');
const app = express();
const PORT = 3000;

const vehiculos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2010,
        propietarios: [
            { nombre: 'Carlos', fecha_de_adquisición: '2010-05-20' },
            { nombre: 'Ana', fecha_de_adquisición: '2015-09-13' }
        ]
    },
    {
        id: 2,
        marca: 'Ford',
        modelo: 'Fiesta',
        año: 2018,
        propietarios: [
            { nombre: 'Lucía', fecha_de_adquisición: '2018-06-25' }
        ]
    }
];


app.get('/vehiculos', (req, res) => {
    let listadoVehiculos = [];
    vehiculos.forEach(vehiculo => {
        listadoVehiculos.push({
            id: vehiculo.id,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
        });
    });
    res.json(listadoVehiculos);
});

app.get('/vehiculos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let vehiculoEncontrado = null;
    vehiculos.forEach(vehiculo => {
        if (vehiculo.id === id) {
            vehiculoEncontrado = vehiculo;
            return;
        }
    });
    res.json(vehiculoEncontrado);
});

app.post('/vehiculos/:id/propietarios', (req, res) => {
    const id = parseInt(req.params.id);
    const propietario = req.body;
    const vehiculoEncontrado = null;
    vehiculos.forEach(vehiculo => {
        if (vehiculo.id === id) {
            vehiculoEncontrado = vehiculo;
            vehiculo.propietarios.push(propietario);
            return;
        }
    });
    res.json(vehiculoEncontrado);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});