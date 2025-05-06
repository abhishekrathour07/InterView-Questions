
// technique 1 

const reverseString = (str) => {
    const reverse = str.split('').reverse().join('')
    return reverse;

}

const stringvalue = 'helloabhishek'

const reverse = reverseString(stringvalue)
console.log(reverse)

//technique 2

const reversevalueFn = (str) => {
    let string = ''
    for (let i = (str.length - 1); i >= 0; i--) {
        string += str[i];
    }
    return string;
}

 
  console.log(reversevalueFn(stringvalue))