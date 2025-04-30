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

const shallowCopy = { ...original };
shallowCopy.name = "Singh";
shallowCopy.email = "new@gmail.com";
shallowCopy.address.city = "Delhi";
shallowCopy.contact.phone = "24721646464";

console.log(original.name);          // Abhishek (not affected)
console.log(original.email)
console.log(original.address.city);  
