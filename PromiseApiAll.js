// in case of resolve
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolve")
    }, 2000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 resolve")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolve")
    }, 3000);
})

Promise.all([p1, p2, p3])
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((error) => {
        console.log(error)
    })


// in case of reject
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P4 resolve")
    }, 4000);
})
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P5 reject")
    }, 2000);
})
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P5 resolve")
    }, 5000);
})

Promise.all([p4, p5, p6])
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((error) => {
        console.log(error)
    })

// P5 reject
//[ 'P1 resolve', 'P2 resolve', 'P3 resolve' ]