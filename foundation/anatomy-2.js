// Anonymous function
(function (a,b,c) {
    return a+ b + c
})

/* function Expression */


const sum = function (a, b) {
    return a + b
}

const result = sum(7,59)
console.log(result)

constanotherSum = sum
console.log(anotherSum(5,9))

let x = 3
console.log(x)

x = sum
console.log(x(11,16))