const original = {
    name: "Abhishek",
    email: "email@gmail.com",
    address: {
        city: "Bangalore",
    },
    contact:{
        phone:"9399039334"
    }
};

const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.address.city = "Singh"
deepCopy.contact.phone  ="123454121"
console.log(original.address.city)
console.log(original.contact.phone)