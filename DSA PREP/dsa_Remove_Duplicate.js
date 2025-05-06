const remove_Duplicate = (arr)=>{
    const pureArr = new Set(arr)
    const value = Array.from(pureArr);
    return value
}
const arr =[1,2,3,4,5,6,1,2,3]
console.log(remove_Duplicate(arr))