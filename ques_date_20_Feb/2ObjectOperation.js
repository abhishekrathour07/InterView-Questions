let z= [1,2,3]
let a ={name: "priya"}
console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.

let data ={name: "priya"}
console.log(delete data.name); //true
console.log(data)//{}

//Explaination : delete will return either true or false.


let data1 ={name: "priya"}
console.log(delete data1); //false
//Explaination : We can delete the object property only. We can't able to delete the object(i.e, data).


const data2 = ["piya", "priya", "supriya"];
const [y] = data2;
console.log(y); //"piya"
//Explaination : We are doing destructuring here. y is representing the first index only
const data3 = ["piya", "priya", "supriya"];
const [one,two] = data3;
console.log(one , two); //"piya" "priya"
//Explaination : We are doing destructuring here. y is representing the first index only