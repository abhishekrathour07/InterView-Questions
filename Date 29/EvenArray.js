// Write a JavaScript function that takes an array of numbers  and returns a new array with only the even numbers.

function evenArray(arr) {
    const evenArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        }
    }
    return evenArr;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayfn = evenArray(arr)
console.log(arrayfn)