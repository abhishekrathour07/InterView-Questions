Array.prototype.mymap = function () {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(logic(a = this[i]))
    }
    return res
}

const arr = [1, 2, 3, 4, 5];
const data = arr.mymap((val) => val * 2);
console.log(data);

Array.prototype.myfilter = function (logic) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i])) {
            res.push(this[i]);
        }
    }
    return res
}


const data1 = arr.mymap((val) => val !== 2);
console.log(data1);


Array.prototype.myfind = function () {

}