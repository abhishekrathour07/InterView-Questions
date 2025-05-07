const add = a => b => c => a + b + c;

console.log(add(2)(3)(4))

function abcd(a, b, c) {
    return a * b * c
}
console.log(abcd(2, 2, 2))

function curring(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
// console.log(curring(1)(2)(4)) 2 3 4 2 5 7
const x = curring(10)()
console.log(x(3))


