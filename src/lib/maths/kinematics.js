var bm = require('./basic')

// interface TimeStamped<T> {
//     value: T;
//     at: Date;
// }

function timeStampedData(datum) {
    return {
        value: datum,
        at: Date.now()
    }
}

function position(stampedDatum) {
    return stampedDatum.value
}

function velocity1d(stampedDatum1, stampedDatum2) {  // values are numbers
    //TODO consider handling divide by zero
    return (stampedDatum2.value - stampedDatum1.value) / (stampedDatum2.at - stampedDatum1.at)
}

function velocity2d(stampedDatum1, stampedDatum2) {  // values are coordinates (x, y)
    var elapsed = stampedDatum2.at - stampedDatum1.at
    return {
        x: (stampedDatum2.value.x - stampedDatum1.value.x) / elapsed,
        y: (stampedDatum2.value.y - stampedDatum1.value.y) / elapsed
    }
}

// TODO: consider a function which gives anticipated position at time t


////////////////////////
// Vector math /////////
////////////////////////

function magnitude2d(v) {
    return bm.pythagorean(v.x, v.y)
}

function direction2d(v) {
    return Math.atan2(v.x, v.y)
}

function xyToMagDir(v) {
    return {
        mag: magnitude2d(v),
        dir: direction2d(v)
    }
}

function magDirToXy(magDir) {
    return {
        x: magDir.mag * Math.sin(magDir.dir),
        y: magDir.mag * Math.cos(magDir.dir)
    }
}


module.exports = {
    timeStampedData: timeStampedData,
    position: position,
    velocity1d: velocity1d,
    velocity2d: velocity2d,
    magnitude2d: magnitude2d,
    direction2d: direction2d,
    xyToMagDir: xyToMagDir,
    magDirToXy: magDirToXy
}
