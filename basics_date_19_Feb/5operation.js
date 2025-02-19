
let a = 3, b = 5
console.log(a && b)
console.log(b && a)

console.log(Math.max([2,3,4,5])) 
const array = [2,3,4,5]
console.log(Math.max(array)) 
console.log(Math.max(1,2,3,4,5,6))

// Here, [2,3,4,5] is an array, and Math.max() expects individual numbers.
// Since an array is not a valid number, JavaScript attempts to convert it to a number but fails, resulting in NaN.