// callback function
function hello() {
    console.log("Abhishek");
}

function greet(callback) {
    console.log("Namaste");
    callback(); 
}

greet(hello);
