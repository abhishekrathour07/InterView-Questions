const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

const fibo = (n) => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
      return fibo(n - 1) + fibo(n - 2);
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = arr.map((num) => factorial(num))

console.log(newArray)

const fiboArray =  arr.map(num=>fibo(num))
console.log(fiboArray)



//0 1 1 2 3 5 8 13 