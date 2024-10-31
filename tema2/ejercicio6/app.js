const http = require('http');
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

let trabajador = new Trabajador('12345678', 'John Doe', 5000);
let trabajador2 = new Trabajador('66666666', 'Sebastian', 100);

let mapa = new Map();

mapa.set(trabajador.getDni(), trabajador);

mapa.set(trabajador2.getDni(), trabajador2);

const server = http.createServer((req, res) => {
   res.setHeader('Content-type', 'text/html');
   res.setHeader('Access-Control-Allow-Origin', '*');
   if (req.url === '/12345678') {
      let dni = req.url.substring(1);
      if (mapa.has(dni)) {
         let trabajadorEncontrado = mapa.get(req.params.numeroDni);
         const responseObject = {
            nombre:trabajadorEncontrado.getNombre(),
            dni: trabajadorEncontrado.getDni(),
            salario: trabajadorEncontrado.getSalario()
         };
         res.end(JSON.stringify(responseObject));
      } else {
         res.writeHead(404, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({ error: 'Trabajador no encontrado' }));
      }
   }else {
      res.end('Endpoint no válido');
   }
   
});


server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
