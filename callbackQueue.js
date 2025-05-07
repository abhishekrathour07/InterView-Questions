const fs = require("fs")

fs.readFile('Promise.js', () => {
   

    setImmediate(() => {
        console.log('setImmediate');
    });
});

console.log("Hello1")

for (let i = 0; i < 10; i++) {
    console.log("Value", i)
}

setTimeout(() => {
    console.log("run at last")
}, 0)
console.log("Hello last")

 setTimeout(() => {
        console.log('setTimeout');
    }, 0);