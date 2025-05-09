const name1 = {
    name: "Abhihske",
    phone: "93348",
    printDetail: function (address, state) {
        console.log(`My name is ${this.name} and my contact number is ${this.phone} from ${address} and state name is ${state}`)
    }
}

const name2 = {
    name: "Abhi",
    phone: "93348",
}

name1.printDetail("Varansi", "Up")

// call method also known as function borrowing -->call a function with specified this and argument
name1.printDetail.call(name2, "Buxar", "Bihar")

// apply --> similar to call but takes second params as array
name1.printDetail.apply(name2, ["Varansi", "UP"])

// bind --> instead of invoking the function return a new function which is called later
const value = name1.printDetail.bind(name2, "Hello", "Javascript")
value()