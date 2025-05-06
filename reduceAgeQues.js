const data = [
    { name: "Abhishek", age: 22 },
    { name: "Abhishek", age: 24 },
    { name: "Abhishek", age: 22 },
    { name: "Abhishek", age: 25 },
    { name: "Abhishek", age: 25 },
]

const age = data.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc

}, {})

const sumage =  data.reduce((acc,curr)=>{
    acc +=curr.age;
    return acc
},0)

console.log(sumage)
console.log(age)