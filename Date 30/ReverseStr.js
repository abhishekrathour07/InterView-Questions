//  Program to find Reverse of a string without using built-in method ?

const reverseStr = (str) => {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseStr("Hello"))
