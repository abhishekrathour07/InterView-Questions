function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const add10 = add(10)
console.log(add10(4)(5))