const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({data: 'success'}))
}).listen(8888, function(){
    console.log('server is listening on port 8888');
});