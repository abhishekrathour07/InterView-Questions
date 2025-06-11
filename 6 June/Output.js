
//  b is not defined 

// console.log(a)
// console.log(b)
// var a = b = 5;

// .call gives undefined bcz  of arrow function 

// const func1 = () => {
//     console.log(this.name)
// }

// func1.call({ name: "Abhishek" })

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

var removeElement = function(nums, val) {
    let k = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; 
            k++;
        }
    }
    return k;
};

console.log(removeElement([1,2,3,1,2],1))