console.log('first');

//   Callback gets stored into quene until everything finishes running. 
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');

//   setInterval runs every 2 seconds (asyncronously)
setInterval(() => {
    console.log('hello world');
}, 2000);
console.log('fourth');