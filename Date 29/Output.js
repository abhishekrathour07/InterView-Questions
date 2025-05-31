// function x() {
//     let a = 10;
//     function d() {
//         console.log(a);
//     }
//     a = 500;
//     return d;
// }
// var z = x();
// z();


// // guess the output 

// getData1()
// // getData();

// function getData1() {
//     console.log("getData1 1")
// }

// var getData = () => {
//     console.log("Hello")
// }

// // guess the output 

// function func() {
//     try {
//         console.log(1)
//         return
//     } catch (e) {
//         console.log(2)
//     } finally {
//         console.log(3)
//     }
//     console.log(4)
// }
// func()

// // guess the output produce by foreach loop 

// const nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach((n) => {
//     if (n % 2 === 0) {
//         // break; 
//     }
//     console.log(n);
// });

// // infinite loop 

// let a = true;
// setTimeout(() => {
//     a = false;
// }, 2000)
// while (a) {
//     console.log(' -- inside whilee -- ');
// }

// setTimeout(() => console.log(1), 0); // 5
// console.log(2); // 1
// new Promise(res => {
//     console.log(3) // 2
//     res();
// }).then(() => console.log(4)); //4 
// console.log(5); // 3 


// async function foo() {
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log("C");
// }
// console.log("D");
// foo();
// console.log("E")


// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);


// function job() {
//     return new Promise((resolve, reject) => {
//         reject()
//     })
// }
// let promise = job();
// promise.then(() => {
//     console.log("1111111111")
// }).then(() => {
//     console.log("22222222222")
// }).catch(() => {
//     console.log("3333333333")
// }).then(() => {
//     console.log("4444444444")
// })

var x = 23;
(function () {
    var x = 43;
    (function random() {
        x++;
        console.log(x);
        var x = 21;
    })();
})();