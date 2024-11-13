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


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

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
    const id = req.params.id;
    const propietario = req.body;
    vehiculos.forEach(vehiculo => {
        if (vehiculo.id == id){
            vehiculo.propietarios.push(propietario);
            return;
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});