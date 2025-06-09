const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Success code")
    } else {
        reject("Eroor while resolving")
    }
})

promise.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("I am alaways executed"))


const newPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Success code")
    } else {
        reject("Eroor while resolving")
    }
})

newPromise.then((data) => {
    console.log(data);
    return "Step 2 started"
}).then((data2)=>{
    console.log(data2)
    return "Step 3 Started"
}).then((data3)=>{
    console.log(data3)
})
.catch((error)=>console.log(error)
).finally(()=>console.log("I am always executed no one can restrict me"))




  const promise1 = new Promise((resolve) => {
    console.log("Second");
  });

  promise1.then((result) => {
    console.log(result);
  });

  console.log("Third");
