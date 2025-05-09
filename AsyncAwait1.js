const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 10000)
})
//  it alaways return a promise 
async function promises() {
    try {
        console.log("Start")
        const data1 = await p1;
        console.log(data1)  // js suspernd further exection until current promise is not resolved 
        console.log("Data 1")
        const data2 = await p2; // all the promises is async / await function runs simentansouly
        console.log(data2)
        console.log("Data 2")
    } catch (error) {
        console.log(error)
    }
}
promises()