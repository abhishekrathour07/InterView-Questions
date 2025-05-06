Array.prototype.myfind = function (logic) {
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i]))
            return this[i]
    }
}

const users = [
    { id: 1, name: "Abhishek", age: 21 },
    { id: 2, name: "Priya", age: 22 },
    { id: 3, name: "Rahul", age: 25 },
    { id: 4, name: "Sneha", age: 23 }
];


const value = users.myfind((user) => user.age === 23)

console.log(value)