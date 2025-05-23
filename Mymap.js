Array.prototype.mymap = function (logic) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(logic(a = this[i]))
    }
    return res
}

const fn  = (val) => val * 2
const arr = [1, 2, 3, 4, 5];
const data = arr.mymap(fn);
console.log(data);


