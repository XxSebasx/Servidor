const http = require('http');
const port = 3000;


const server = http.createServer((req,res) =>{
   res.setHeader('Content-type', 'text/html');
   res.setHeader('Access-Control-Allow-Origin', '*');

   const responseObject = {
      nombre: "Hola esta es una respuesta JSON",
      edad: "21",
      pais: req.method
   };

   res.end(JSON.stringify(responseObject));
});

server.listen(port,() =>{
   console.log(`Server is running or port ${port}`);
});