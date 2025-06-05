const sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(5)(5)(12)())


const sumFn = function (a) {
    return function (b) {
        if (b) {
            return sumFn(a + b)
        } else
            return a
    }
}
const value = sumFn(5)(3)(12)(23)(1)
console.log(value())