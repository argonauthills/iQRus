var Promise = require('bluebird').Promise
var EventEmitter = require('events').EventEmitter

var usonic = require('r-pi-usonic');
// setInterval(function() {
//     console.log('Distance: ' + sensor().toFixed(2) + ' cm');
// }, 100);

var newYEventName = "newY"

function init(pins) {
    return new Promise(function(resolve) {
        var trigPin = pins.ultrasonicTrigPin
        var echoPin = pins.ultrasonicEchoPin
        if (!trigPin) throw new Error("missing ultrasonic trig pin number")
        if (!echoPin) throw new Error("missing ultrasonic echo pin number")

        sensor = usonic.createSensor(echoPin, trigPin, 1000) //TODO: I think this is done synchronously.  Find a way to do it async.

        var eventEmitter = new EventEmitter()

        setInterval(function() {
            eventEmitter.emit(newYEventName, sensor())
        }, 100)  //TODO: put value in config

        return resolve(eventEmitter)
    })

}

module.exports = {
    newYEventName: newYEventName,
    init: init
}