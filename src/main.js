// var onOff = require('onoff')
// var gpio = onOff.Gpio

var mo_ = require('./lib/modash')
var sense = require('./sense/index')

var usonic = require('r-pi-usonic');
var sensor = usonic.createSensor(18, 17, 1000);
setTimeout(function() {
    console.log('Distance: ' + sensor().toFixed(2) + ' cm');
}, 100);

sense.init()

console.log("starting...")

// var led = new gpio(21, 'out')
// var button = new gpio(20, 'in', 'both');

// button.watch(function(err, state) {
//     console.log("#####################button change####################", state)
//     console.log("state", state)
// })

// var on = true
// setInterval(function() {
//     console.log("switching")
//     led.write(mo_.boolToInt(on), function(){
//         console.log("switched", on)
//         on = !on
//     })
// }, 500)

