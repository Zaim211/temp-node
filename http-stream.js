const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStraem = fs.createReadStream('./content/big.txt', 'utf8');
    fileStraem.on('open', () => {
        fileStraem.pipe(res);
    });
    fileStraem.on('error', (err) => {
        res.end(err);
    });
}).listen(5000);