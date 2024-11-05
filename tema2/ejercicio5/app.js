const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Content-type', 'text/html');
   
   const currentDate = new Date();
   res.write(`<h1>La fecha y hora actual son ${currentDate.toLocaleString()}</h1>`)
   res.end();
});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});