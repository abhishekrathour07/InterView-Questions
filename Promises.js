const cart = ["kurta", "gangra", "choli"]
// checkErr = '' ==> replace with cart

const createCart = (cart) => {
    const cartPromise = new Promise((resolve, reject) => {
        if (!cart) {
            const error = new Error("Cart is empty");
            return reject(error);
        }
        const orderId = "1234"
        return resolve(orderId)
    })
    return cartPromise
}
const proccedToPaymenyt = (orderId) => {
    const paymentPromise = new Promise((resolve, reject) => {
        if (!orderId) {
            const error = new Error("OrderId is not found")
            return reject(error)
        }
        return resolve("Order Place SuccessFully")
    })

    return paymentPromise
}

const promise = createCart(cart)
    .then((data) => {
        console.log(data)
        return proccedToPaymenyt(data)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })