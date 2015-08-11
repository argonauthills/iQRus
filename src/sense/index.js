var Promise = require('bluebird').Promise

var bm = require('../lib/maths/basic')
var kine = require('../lib/maths/kinematics')

var ultrasonic = require('./ultrasonic')

var xyPos
var zPos
var rPos

var prevXyPos
var prevZPos
var prevRPos

function init(config) {
    if (!config) throw new Error("missing config")
    if (!config.pins) throw new Error("missing config pins")
    return Promise.all([
        ultrasonicInit(config.pins)
    ])
}

function ultrasonicInit(pins) {
    return ultrasonic.init(pins)
    .then(function(listener) {
        listener.on(ultrasonic.newYEventName, function(value) {
            // console.log('Distance: ' + sensor().toFixed(2) + ' cm')
        })
    })
}


function setXyPos(x, y) {
    prevXyPos = xyPos
    xyPos = kine.timeStampedData({x:x, y:y})
}

function setZPos(z) {
    prevZPos = zPos
    zPos = kine.timeStampedData(z)
}

function setRPos(r) {
    prevRPos = rPos
    rPos = kine.timeStampedData(r)
}

//TODO: handle initial conditions, when we have no xy
function getXyPosition() {
    return xyPos.value
}

function getZPosition() {
    return zPos.value
}

function getRPosition() {
    return rPos.value
}

function getXyVelocity() {
    return kine.velocity2d(xyPos, prevXyPos)
}

function getZVelocity() {
    return kine.velocity1d(zPos, prevZPos)
}

function getRVelocity() {
    return kine.velocity1d(rPos, prevRPos)
}

function testValues() {
    setInterval(function() {
        var dx = (Math.random() > .5) ? 1 : -1
        var dy = (Math.random() > .5) ? 1 : -1
        setXyPos(xyPos.value.x + dx, xyPos.value.y + dy)
    }, 500)
}

module.exports = {
    init: init,
    getXyPosition: getXyPosition,
    getZPosition: getZPosition,
    getRPosition: getRPosition,
    getXyVelocity: getXyVelocity,
    getZVelocity: getZVelocity,
    getRVelocity: getRVelocity
}