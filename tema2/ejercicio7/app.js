const http = require('http');
const port = 3000;
const url = require('url');
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

//http://localhost:3000?data={"dni":"12345678"}
//http://localhost:3000?data={"nombre":"Alice","salario":1000,"dni":"77495791A"}
const server = http.createServer((req, res) => {
   // Verificamos que sea una solicitud GET
   if (req.method === 'GET') {
      // Analizamos la URL para extraer los parámetros de consulta
      const queryObject = url.parse(req.url, true).query;
      if (queryObject.data) {
         try {
            const jsonData = JSON.parse(queryObject.data); // Convertimos el string JSON a un objeto JavaScript
            console.log(jsonData);
            res.setHeader('Content-Type', 'application/json');
            if(!jsonData.salario && jsonData.dni){
               if (mapa.has(jsonData.dni)) {
                  res.end(JSON.stringify({
                     nombre: mapa.get(jsonData.dni).getNombre(),
                     salario: mapa.get(jsonData.dni).getSalario()
                  }));
               }else{
                  res.writeHead(302, {
                     Location: '/error'
                  });
                  res.end();
               }
            }else{
               if(!mapa.has(jsonData.dni)){
                  const nuevoTrabajador = new Trabajador(jsonData.dni, jsonData.nombre, jsonData.salario);
                  mapa.set(nuevoTrabajador.getDni(), nuevoTrabajador);
                  res.end('Trabajador añadido correctamente');
               }else{
                  res.writeHead(302, {
                     Location: '/error'
                  });
                  res.end();
               }

            }
         } catch (error) {
            // En caso de error de parseo
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid JSON format in query parameter' }));
         }
      } else {
         res.statusCode = 400;
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify({ error: 'No data parameter found in query' }));
      }
   } else {
      res.statusCode = 405; // Método no permitido si no es GET
      res.setHeader('Content-Type', 'text/plain');
      res.end('Only GET requests are supported');
   }

});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
