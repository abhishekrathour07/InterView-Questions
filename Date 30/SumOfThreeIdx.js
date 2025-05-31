// Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

function sumOfThirds(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 3) {
        sum += arr[i];
    }
    return sum
}

console.log(sumOfThirds([1, 2, 3, 4, 5, 6, 6, 7, 8, 9]))