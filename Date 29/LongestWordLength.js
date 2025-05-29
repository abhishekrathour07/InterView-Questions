//Program to find longest word in a given sentence ?

const longestStr = (str) => {
    const newstr = str.split(' ');
    let longStr = '';
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i].length > longStr.length) {
            longStr = newstr[i];
        }
    }
    return longStr
}

const strval = "Hello my name is Abhishek";
console.log(longestStr(strval))