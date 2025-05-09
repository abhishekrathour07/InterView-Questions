// in case of resolve
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolve")
    }, 4000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 reject")
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolve")
    }, 3000);
})

Promise.any([p1, p2, p3])
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((error) => {
        console.log(error)
    })

// return first fullfilled api
// P3 resolve
