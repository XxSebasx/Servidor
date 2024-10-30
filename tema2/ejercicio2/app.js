const http = require('http');
const port = 3000;


const server = http.createServer((req,res) =>{
   res.setHeader('Content-type', 'text/html');
   res.setHeader('Access-Control-Allow-Origin', '*');
   if(req.url === '/'){
      res.write('<h1>Bienvenido a la pagina principal</h1>');
   }
   else if(req.url === '/about'){
      res.write('<h1>Sobre nosotros</h1>');
   }else{
      res.write('<h1>404</h1>');
   }
   res.end();

})


server.listen(port,() =>{
   console.log(`server is running or port ${port}`);
})
