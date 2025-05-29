// This code prints 6 everytime. How to print 1,2,3,4,5,6 ?  (Most asked)

for (let i = 1; i <= 6; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}


// closure

function x() {
    function closure(x) {
        setTimeout(() => {
            console.log(x++)
        }, i * 1000)
    }

    for (var i = 0; i <= 5; i++) {
        closure(i)

    }
}

x()
