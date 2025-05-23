Array.prototype.myReduce = function (callback, initalvalue) {
    let index = 0;
    if (initalvalue === undefined) {
        initalvalue = this[i];
        index = 1
    }
    for (let i = index; i < this.length; i++) {
        initalvalue = callback(initalvalue, this[i])
    }

    return initalvalue
}

// const acc = function(acc,val){
//     return acc+val
// }
const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc,val)=>acc+val, 0)
console.log(sum)



