// in case of resolve
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolve")
    }, 2000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 reject")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolve")
    }, 3000);
})

Promise.allSettled([p1, p2, p3])
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((error) => {
        console.log(error)
    })

// output 
// [
//     { status: 'fulfilled', value: 'P1 resolve' },
//     { status: 'rejected', reason: 'P2 reject' },
//     { status: 'fulfilled', value: 'P3 resolve' }
// ]
