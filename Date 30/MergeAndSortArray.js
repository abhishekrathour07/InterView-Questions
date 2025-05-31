// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].Merge them and sort [0,3,4,4,6,30,31] ?

const mergeArrayandSort = (arr1, arr2) => {
    const mergeArr = [...arr1, ...arr2];
    for (let i = 0; i < mergeArr.length - 1; i++) {
        for (let j = i + 1; j < mergeArr.length; j++) {
            if (mergeArr[i] > mergeArr[j]) {
                let temp = mergeArr[i];
                mergeArr[i] = mergeArr[j]
                mergeArr[j] = temp;
            }
        }
    }
    return mergeArr
}


console.log(mergeArrayandSort([0, 3, 4, 31], [4, 6, 30]));
