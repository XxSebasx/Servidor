


const http = require('http');
const querystring = require('querystring');
const port = 3000;

class Trabajador {
   #dni;
   #nombre;
   #salario;

   constructor(dni, nombre, salario) {
      this.#dni = dni;
      this.#nombre = nombre;
      this.#salario = salario;
   }

   getDni() {
      return this.#dni;
   }

   getNombre() {
      return this.#nombre;
   }

   getSalario() {
      return this.#salario;
   }
}

let trabajador = new Trabajador('12345678', 'John', 5000);
let mapa = new Map();
mapa.set(trabajador.getDni(), trabajador);

const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
  // Verificamos que sea una solicitud POST y que el encabezado Content-Type sea de tipo formulario
  if (req.method === 'POST' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';

    // Construimos el cuerpo de la solicitud a medida que se recibe
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Cuando se ha recibido todo el cuerpo de la solicitud, procesamos los datos
    req.on('end', () => {
      // Decodificamos los datos URL-form-encoded
      const parsedData = querystring.parse(body);

      // Intentamos parsear el campo JSON si existe
      if (parsedData.data) {
        try {
          const jsonData = JSON.parse(parsedData.data); // Convertimos el string JSON a objeto JavaScript
            if(!jsonData.salario) {
               
               if(mapa.has(jsonData.dni)){
                  console.log('JSON Data received:', jsonData);
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                     nombre: mapa.get(jsonData.dni).getNombre(),
                     salario: mapa.get(jsonData.dni).getSalario(),
                     dni: mapa.get(jsonData.dni).getDni()
                  }));
               }
            }else{
               const nuevoTrabajador = new Trabajador(jsonData.dni, jsonData.nombre, jsonData.salario);
               mapa.set(nuevoTrabajador.getDni(), nuevoTrabajador);
               res.setHeader('Content-Type', 'application/json');
               res.end('Trabajador añadido correctamente');
            }

        } catch (error) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid JSON format in form data' }));
        }
      } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'No JSON data found in form' }));
      }
    });
  } else {
    res.statusCode = 405; // Método no permitido si no es POST
    res.setHeader('Content-Type', 'text/plain');
    res.end('Only POST requests with x-www-form-urlencoded are supported');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
