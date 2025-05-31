// Find the max count of consecutive 1’s in an array ?

const maxCountOne = (arr) => {
    let maxCount = 0;
    let consecutive = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            consecutive++;
        }
        else {
            consecutive = 0
        }
    }
    return maxCount
}

const arr = [1, 2, 1, 1, 1, 5, 3, 4, 1, 1, 6, 8, 1, 1, 1, 1, 28]
console.log(maxCountOne(arr));