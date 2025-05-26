// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method. 


const  arrayplus3 = (arr)=>{
    const newArr = arr.map((data)=>data+3);
    return newArr
}
console.log(arrayplus3([1,2,3,4,5,6]));

// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const 