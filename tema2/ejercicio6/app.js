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
let mapa = new Map();

mapa.set(trabajador.getDni(), trabajador);



const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   if(req.url.split('/')[3] === 'ejemplo' && req.url.split('/')[2] === 'numeroDni' && req.url.split('/')[1] === 'dni') {
      let dni = req.url.split('/')[4];
      if (mapa.has(dni)) {
         const responseObject = {
            dni: dni,
            nombre: mapa.get(dni).getNombre(),
            salario: mapa.get(dni).getSalario()
         };
         res.end(JSON.stringify(responseObject));
      } else {
         res.writeHead(302, {
            Location: '/error'
         });
         res.end();
      }
   }else if(req.url.split('/')[1] === 'nuevo' && req.url.split('/')[2] === 'numeroDni' && req.url.split('/')[3] === 'salario' && req.url.split('/')[4] === 'nombre') {
      let dni = req.url.split('/')[5];
      let nombre = req.url.split('/')[6];
      let salario = parseInt(req.url.split('/')[7]);
      let nuevoTrabajador = new Trabajador(dni, nombre, salario);
      mapa.set(dni, nuevoTrabajador);
   }

});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
