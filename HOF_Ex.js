function area(radius) {
    return Math.PI * radius * radius
}

const diameter = (radius) => {
    return 2 * Math.PI * radius
}

const circumfrance = (radius)=>{
    return 2 * radius;
}

const calculateArea = (array, logic) => {
    let output = []
    for (let index = 0; index < array.length; index++) {
        output.push(logic(array[index]))

    }
    return output
}

const value = [1, 2, 3, 4, 5, 6]
console.log(calculateArea(value, area))
console.log(calculateArea(value, diameter))
console.log(calculateArea(value, circumfrance))