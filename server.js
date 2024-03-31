const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('request event'); //   This will run every time a request is made to the server.
//     res.end('Hello World');
// });

// server.listen(5000, () => {
//     console.log('Server listening on port : 5000....');
// });

const Server = http.createServer();

Server.on('request', (req, res) => {
    res.end('Welcome');
});

Server.listen(5000);