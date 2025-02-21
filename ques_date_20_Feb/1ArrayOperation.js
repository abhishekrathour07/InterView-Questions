let a = [];
let b = [];
console.log(a==b); //false
console.log(a===b); //false

//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.


let c = [];
let d = c;
console.log(c==d); //true
console.log(c===d); //true
//Explaination : Here we are assigning a to b, where memory location is now same.

console.log(a[0]==b[0]); //true
console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.