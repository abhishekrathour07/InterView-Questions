// Write a program to remove duplicates from an array ?

function removeDuplicate(array) {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 3]))

