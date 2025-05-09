// Your JS Code
//    ↓
// fetch(url)
//    ↓
// Browser Web API Layer
//    ↓
// Networking Thread → Internet
//    ↓
// Server responds
//    ↓
// Back to JS → Promise resolved
//    ↓
// .then(res => res.json())



const apiData = async () => {
    try {
        const data = await fetch("https://api.github.com/users/abhishekrathour07");
        const response = await data.json();
        console.log(response.name)

    } catch (error) {
        console.log(error)
    }
}
apiData()


console.log("Start");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log("Got response object");
    return res.json(); // Another promise
  })
  .then((data) => {
    console.log("Parsed data:", data);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });

console.log("End");
