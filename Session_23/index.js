// http

const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;


const app = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url + '.html');
    if(req.url === '/'){
        fs.readFile(filePath, (err, data) => {
            if(err){
                throw err;
            }
            res.end(data);
        })
    }
    else if(req.url === '/about'){
        fs.readFile(filePath, (err, data) => {
            if(err){
                throw err;
            }
            res.end(data);
        })
    }
    else{
        res.end();
    }
    
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

