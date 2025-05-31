// Write a JavaScript program to find the maximum number in an array.

const maxnum = (arr)=>{
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]>max){
        max = arr[i]
       }
    }
    return max;
}
const array = [1,22,43,56,765,121,777]
const Maxval = maxnum(array) 
console.log(Maxval)