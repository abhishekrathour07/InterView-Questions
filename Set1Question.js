// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method. 

const arrayplus3 = (arr) => {
    const newArr = arr.map((data) => data + 3);
    return newArr
}
console.log(arrayplus3([1, 2, 3, 4, 5, 6]));

// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

console.log("Question 2")
function strManipulation(array) {
    const res = array.map((val) => val.charAt(0).toUpperCase()+val.slice(1))
    return res;
}
console.log(strManipulation(['apple', 'bidi', 'cigratte', 'd']))


// 3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const people = [
    { name: "Ankit", age: 25 },
    { name: "Vinit", age: 24 },
    { name: "Shashi", age: 29 },
];
const age = people.map(val => val.age)
console.log(age)

//4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const products = [
    { name: "Lip Balm", stock: 100 },
    { name: "PERFUME", stock: 400 },
    { name: "Socks", stock: 200 },
];
const fnProduct = products.map(val => val.name.toLowerCase())
console.log(fnProduct)

// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const cities = [
    { name: "New York", population: 8538000 },
    { name: "Los Angeles", population: 3976000 },
    { name: "Bangalore", population: 13608000 },
];
const getCityNames = (cities) => cities.map((city) => city.name);
console.log(getCityNames(cities));


// 6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];

const greaterLen = (fruits) => fruits.filter((fruit) => fruit.length > 5)
console.log(greaterLen(fruits))

// 7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.
const num = [1, 2, 3, 4, 5, 30, 24, 15];
const divisibleby3and5 = (nums) => nums.filter(num => num % 3 === 0 || num % 5 === 0);
console.log(divisibleby3and5(num))

// 8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const people1 = [
    { name: "Rahul", age: 25 },
    { name: "Raj", age: 35 },
    { name: "Vijay", age: 45 },
];
console.log(people1.filter((val) => val.age > 30));

// 9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.
const students = [
    { name: "Aditya", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 90 },
];
console.log(students.filter(val => val.score > 80))

//10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const people2 = [
    { name: "Ridhima", age: 75, city: "Indore" },
    { name: "Akshay", age: 60, city: "Delhi" },
    { name: "Udit", age: 80, city: "Indore" },
    { name: "Venki", age: 80, city: "Bangalore" },
];

console.log(people2.filter(data => data.city === "Indore" && data.age > 70));

// 11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const books = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
    },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];
console.log(books.filter(data => data.genre === "Science Fiction"));

// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const employees = [
    { name: "Abhay", age: 25, salary: 20000 },
    { name: "Joice", age: 30, salary: 35000 },
    { name: "Reena", age: 35, salary: 15000 },
    { name: "Jeena", age: 40, salary: 50000 },
];

const empfilter = employees.filter(data => data.age > 25 && data.salary > 22000) 
console.log(empfilter)