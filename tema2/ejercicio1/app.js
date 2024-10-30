const http = require('http');
const port = 3000;


const server = http.createServer((req,res) =>{
   res.setHeader('Content-type', 'text/html');
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.write(`<h1>URL solicitada ${req.url}</h1>`);
   res.write(`<h1>Metodo de solicitud ${req.method}</h1>`);
   res.end();
})


server.listen(port,() =>{
   console.log(`server is running or port ${port}`);
})
