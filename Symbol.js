const s1 = Symbol("id")
const s2 = Symbol("id")
console.log(s1 === s2); // because each symbol is totally unique 

const sym = Symbol("id");
const user = {
    name: "Abhishek",
    [sym]: 101,
    age: 23
};
const user2 = { ...user }
console.log(user2)

console.log(Object.keys(user)) //[ 'name', 'age' ]
console.log(user)

console.log(user[sym]); // 101
console.log(user["id"]); // undefined