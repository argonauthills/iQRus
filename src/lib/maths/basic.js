function square(x) {
    return x * x
}

function sum() {
    return argsToArray(arguments).reduce(function(acc, x) {
        return acc + x
    })
}

// function pythagorean() {  // any number of args
//     return Math.sqrt(sum(argsToArray(arguments).map(square)))
// }

function pythagorean(x, y) {
    return Math.sqrt(square(x) + square(y))
}

module.exports = {
    square: square,
    sum: sum,
    pythagorean: pythagorean
}