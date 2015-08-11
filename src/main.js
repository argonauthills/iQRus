// var onOff = require('onoff')
// var gpio = onOff.Gpio

var mo_ = require('./lib/modash')

var config = require('./config')

var sense = require('./sense/index')

sense.init(config)


var hmc5883l = require('hmc5883l');
var xval = -1;
var yval = -1;
var zval = -1;

var bearing = -1;

hmc5883l.Initialize(function(err, data)
{

  hmc5883l.SetUp(function(err)
  {
    //console.log("Commencing")
  });
  setInterval(function(){
    hmc5883l.readX(function(err, data){
      console.log("X value =", data);
      xval = data;
    });
    hmc5883l.readY(function(err, data){
      console.log("Y value =", data);
      yval = data;
    });
    bearing = math.atan2(yval, xval) + .48;
    if(bearing < 0)
    {
      bearing += 2 * Math.PI;
    }
    bearing = bearing * (180 / Math.PI);
    console.log("Bearing =", bearing);
  }, 1000)

});

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

