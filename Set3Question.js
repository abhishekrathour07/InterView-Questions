// Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
];
const ans1 = cars.find((val) => val.make === "Toyota" && val.year > 2010)
console.log(ans1)


// Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const ans2 = cars.filter((val) => val.year > 2012)
console.log(ans2)

// 3. Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
];

const ans3 = products.find((val) => val.category === 'electronics')
console.log(ans3)

// 4. Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const ans4 = products.filter((val) => val.category === 'electronics')
console.log(ans4)

// 5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.
const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
];

const studentGrade = (students, grade) => {
    const res = students.filter(val => val.grade >= grade)
    return res;
}
console.log(studentGrade(students, 90))

// 6.Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.
const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 781 },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        pageCount: 193,
    },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];
console.log(books.find(book => book.pageCount > 500))

// 7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.
const customers = [
    { name: "John", age: 25, gender: "Male" },
    { name: "Jane", age: 30, gender: "Female" },
    { name: "Bob", age: 40, gender: "Male" },
    { name: "Alice", age: 35, gender: "Female" },
];
console.log(customers.filter(cust => cust.gender === "Male"))

// 8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.
const games = [
    {
        title: "The Witcher 3: Wild Hunt",
        developer: "CD Projekt Red",
        genre: "RPG",
    },
    { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
    { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
    { title: "Portal 1", developer: "Valve Corporation", genre: "Puzzle" },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo",
        genre: "Adventure",
    },
];

const gameGen = (arr, genre) => {
    return arr.filter(val => val.genre === genre)
}
console.log(gameGen(games, "Adventure"))

// 12. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.
const student = [
    { name: "John", score: 80 },
    { name: "Jane", score: 90 },
    { name: "Bob", score: 75 },
    { name: "Alice", score: 85 },
];

const studentAvg = student.reduce((val, curr) => val + curr.score, 0) / student.length
console.log(studentAvg)


// 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const products2 = [
    { name: "Shirt", price: 20, quantity: 2 },
    { name: "Pants", price: 30, quantity: 1 },
    { name: "Shoes", price: 50, quantity: 1 },
    { name: "Hat", price: 10, quantity: 3 },
];

const getTotalCost = (products2) => products2.reduce((acc, val) => acc += val.price * val.quantity, 0);

console.log(getTotalCost(products2));

// 14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const arrystr = ["Hello", "My", "Name", "Is", "Abhishek"];
const concatStr = (arr) => arr.reduce((acc, val) => acc += val)
console.log(concatStr(arrystr))

// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 2, 6];

const minValueReduce = (arr) => arr.reduce((acc, val) => acc < val ? acc : val);
console.log(minValueReduce(numbers))
