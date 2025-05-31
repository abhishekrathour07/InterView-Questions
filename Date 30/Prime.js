const checkPrime = (num) => {
    if (num <= 1) {
        return "Not a Prime Number"
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return " Not a Prime number"
        }
    }
    return "Prime number"
}

console.log(checkPrime(15)) // Not a Prime number
console.log(checkPrime(19)) // Prime number