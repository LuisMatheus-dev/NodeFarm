const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) =>  {
const productData = JSON.parse(data);

const server = http.createServer(( req, res) => {
    console.log(req.url)

    const pathName = req.url;

    if(pathName === '/' || pathName === "/overview") {
        res.end("Você esta em Overview")
    
    } else if (pathName === '/product') {
        res.end("Você esta em Produtos ")
    
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json'})
        res.end(productData);
        
    } else {
        res.writeHead(404);
        res.end('Page not found')
    }
});

server.listen(3333, '127.0.0.1', () => {
    console.log('Listening to request asdsadsa')
})