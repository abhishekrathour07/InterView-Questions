// 1.Write a function to calculate sum of n elements

const sumfn = (nums) => {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    return sum;
}
console.log(sumfn([1, 2, 3, 4, 5, 6, 7]))

// 2.write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.
const maxmin = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const avg = arr.reduce((acc, val) => acc + val, 0) / arr.length
    return { Max: max, min: min, avg: avg }
}
console.log(maxmin([1, 2, 3, 4, 10, 4]))

// 3 Given an array of numbers, write a function that returns the sum of all the even numbers.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenFn = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            sum += arr[i];
    }
    return sum
}
console.log(evenFn(num))

// Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.

const numbers = [10, 2, 7, 14, 5];
const differFn = (arr) => {
    const sortarr = arr.sort((a, b) => a - b);
    return sortarr[arr.length - 1] - sortarr[0]
}
console.log(differFn(numbers))

//Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 35 },
];

const oldest = people.reduce((max, person) => person.age > max.age ? person : max);
console.log(oldest.name);
