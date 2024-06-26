const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`The system uptime is ${os.uptime()} seconds`);

console.log(os.platform());

console.log(__filename);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
