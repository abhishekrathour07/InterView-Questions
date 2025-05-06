Array.prototype.myfilter = function (logic) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i]))
            result.push(this[i])
    }
    return result
}

const array = [1, 2, 3, 4, 5, 6]

const filterData = array.myfilter((value) => value !== 2)
console.log(filterData)