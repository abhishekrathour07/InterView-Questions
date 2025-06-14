
//  b is not defined

// console.log(a)
// console.log(b)
// var a = b = 5;

// .call gives undefined bcz  of arrow function

// const func1 = (val) => {
//     console.log(this.name , name)
// }

// func1.call({ name: "Abhishek" } , "abhishek")

// const user = {
//     id: 123,
//     name: "Abhishek",
//     address: {
//         currentlocation: "Banglore",
//         homeTown: "Bihar"
//     }
// }

// Object.defineProperty(user.address, "homeTown", {
//     writable: false
// });

// user.address.homeTown = "Bihar";
// console.log(user.address.homeTown);



//

// var removeElement = function(nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// };

// console.log(removeElement([1,2,3,1,2],1))

// console.log(012)

// foo()
// function foo(){
//     console.log("hello")
// }
// foo()

// async function hello(){
//     return "fuck"
// }

// hello().then((VL)=>console.log(VL))

// function abc(){
//     console.log("hii")
// }
// const value=new abc();
// console.log(value)


let user={
    name:"hello",
    age:29
}

user["user-name"]= user.name;
// console.log(delete user.name);
