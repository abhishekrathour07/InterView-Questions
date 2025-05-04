
//technique 1 
const palindrome = (num) => {
    const value = String(num)
    const reverse = value.split('').reverse().join('');
    const numval = parseInt(reverse)

    if (num === numval) {
        console.log("Given number is palindrome");
    } else {
        console.log("Not a plaindrome");
    }

}

palindrome(121)

// technique 2 

const palindromeFn = (num) => {
    let original = num;
    let reversed = 0;
    while (num > 0) {
        const lastvalue = num % 10
        reversed = reversed * 10 + lastvalue;
        num = Math.floor(num / 10);
    }
    return original === reversed

}

console.log(palindromeFn(1221))