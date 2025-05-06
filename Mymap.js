
Array.prototype.mymap = function (logic) {
    let array = [];
    for (let index = 0; index < this.length; index++) {
        array.push(logic(this[index]));
    }
    return array;
}

const value = [1, 2, 3, 4, 5];
const data = value.mymap((r) => r * 2);
console.log(data);
