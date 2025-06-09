let count = 0;

const getData = () => {
    console.log("Debouncing function call ", ++count)
}


function debounce(fn, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this)
        }, delay);
    }
} 
const debouceFunc = debounce(getData, 300)