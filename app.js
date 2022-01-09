const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    if(req.url == '/'){
        fs.createReadStream('Level 1.html').pipe(res)
    }
})

server.listen(1345,console.log('listening at: http://localhost:1345'))