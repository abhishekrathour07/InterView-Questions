
//  b is not defined 

console.log(a)
console.log(b)
var a = b = 5;

// .call gives undefined bcz  of arrow function 

const func1 = () => {
    console.log(this.name)
}

func1.call({ name: "Abhishek" })

const user = {
    id: 123,
    name: "Abhishek",
    address: {
        currentlocation: "Banglore",
        homeTown: "Bihar"
    }
}

Object.defineProperty(user.address, "homeTown", {
    writable: false
});

user.address.homeTown = "Bihar";
console.log(user.address.homeTown);