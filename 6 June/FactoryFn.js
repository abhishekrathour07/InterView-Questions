// //   factory function 

// // function name(name) {
// //     const obj = { name }
// //     return obj
// // }


function nameFn(name) {
    this.name = name;
}

nameFn.prototype.sayHello = function () {
    console.log(`Hello dear ${this.name}`);
};

const value = new nameFn("Abhishek");
console.log(value)

value.sayHello(); // Output: Hello dear Abhishek

const closure = () => {

     const print = (i) => {
            setTimeout(() => {
                (function (i) {
                    console.log(i)
                })(i)
            }, 1000 * i)
        }
    for (var i = 0; i < 6; i++) {

        print(i)
    }
}

const count =0 

function abc(){
    console.log(count)
}
closure()