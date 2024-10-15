const http = require('http');

// Sunucuyu oluştur
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Merhaba, Yeni Code!\n');
});

// Sunucuyu başlat
const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
