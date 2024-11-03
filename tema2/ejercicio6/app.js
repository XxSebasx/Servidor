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
   let url = req.url.split('/');
   if(url[1] === 'dni' && url[2] === 'numeroDniejemplodni') {
      let dni = req.url.split('/')[3];
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
   }else if(url[1] === 'nuevo' && url[2] === 'dni' && url[3] === 'nombre' && url[4] === 'salariocomoejemplo' && url[5] === 'nuevo') {
      let dni = req.url.split('/')[6];
      let nombre = req.url.split('/')[7];
      let salario = parseInt(req.url.split('/')[8]);
      let nuevoTrabajador = new Trabajador(dni, nombre, salario);
      if(!mapa.has(dni)){
         mapa.set(dni, nuevoTrabajador);
         res.end('Trabajador añadido correctamente');
      }else{
         res.writeHead(302, {
            Location: '/error'
         });
         res.end();
      }
      
   }else{
      res.write(`<h1>Bienvenido</h1>`)
      res.end();
   }

});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
