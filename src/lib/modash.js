function boolToInt(bool) {
    if (bool) return 1
    else return 0
}

function argsToArray(args) {
    var toReturn = []
    for (var i = 0; i < args.length; i++) {
        toReturn.push(args[i])
    }
    return toReturn
}

module.exports = {
    boolToInt: boolToInt,
    argsToArray: argsToArray
}