const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   if(req.url === '/redirect') {
      res.writeHead(302,{
         Location: '/'
      });
      res.end();
   }else{
      res.setHeader('Content-type', 'text/html');
      res.write('<h1>Bienvenido a la pagina principal</h1>');
      res.end();
   }
});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});