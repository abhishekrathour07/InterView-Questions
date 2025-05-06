const findDuplicates = (arr) => {
    const seen = new Set();
    const pureArr = arr.filter(item => {
        if (seen.has(item))
            return true;
        else
            seen.add(item);
    });
    return pureArr
};

console.log(findDuplicates([1, 2, 3, 4, 1, 2, 3]))

// technique 2 

const duplicateFn = (array) => {
    let seen = [];
    let duplicates = [];

    for (let i = 0; i < array.length; i++) {
        if (seen.includes(array[i])) {
            if (!duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        } else {
            seen.push(array[i]);
        }
    }

    console.log(duplicates);
};

duplicateFn([1, 2, 3, 1, 2]); // Output: [1, 2]


