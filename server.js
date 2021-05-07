const http = require('http');
const PORT = 3333;
const IP = 'localhost';
const server = http.createServer((req, res)=>{
  const resp = [];
  resp['/'] = '<h1>HOME</h1>';
  resp['/contato'] = '<h1>CONTATO</h1>';
  resp['semURL'] = '<h1>URL sem resposta definida</h1>';

  res.end(resp[req.url] || resp['semURL']);
});

server.listen(PORT, IP, ()=>{
  console.log(`EUREKA! Servidor de pé em: http://${IP}:${PORT}`);
  console.log("Para desligar o servidor: ctrl + c");
});