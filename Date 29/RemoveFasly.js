function FalsyValue(arr) {
    return arr.filter(Boolean)
}
const mixedArray = [0, "", false, null, undefined, NaN, "hello", 42];
console.log(FalsyValue(mixedArray))