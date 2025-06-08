let count = 0;

const getData = () => {
    console.log("Debouncing function call ", ++count)
}


function debounce(fn, delay) {
    let timer
    return function (args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


const debouceFunc = debounce(getData, 400)


function nameFn(name) {
    this.name = name;
}

nameFn.prototype.sayHello = function () {
    console.log(`Hello dear ${this.name}`);
};

const value = new nameFn("Abhishek");
console.log(value)

value.sayHello(); // Output: Hello dear Abhishek
