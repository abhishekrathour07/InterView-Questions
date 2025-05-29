
const response = fetch("https://dummyjson.com/recipes")

response.then((response) => response.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err))

