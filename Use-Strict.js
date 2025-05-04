"use strict"

const x = 10
console.log(x)
let y = 20

const value = Object.freeze(
    {
        name: "abhishek",
        Writable: false
    }
)

value.name = "ABhi" //error

const functionname = () => {
    "use strict"
    z = 20  //error
    console.log(z)
}

functionname()
console.log(value)