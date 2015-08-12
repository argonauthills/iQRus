iQRus
=====

NodeJS brain for a quadcopter.

Hardware dependencies
---------------------

- Raspberry Pi
- HC-SR04 Ultrasonic Distance Sensor
    - powered on 5V
- Adafruit Ultimate GPS Breakout
    - powered on 5V, logic should be 3V3
- HMC5883L Magnetometer
    - will need to set up i2c

Software dependencies
---------------------

- Node.js (version XXXXX)

Install
-------

    npm install

Run
---

    npm start

Additional resources
--------------------

- http://thejackalofjavascript.com/rpi-an-ultrasonic-sensor-measure-distances/
- https://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup/configuring-i2c
- https://learn.adafruit.com/adafruit-hmc5883l-breakout-triple-axis-magnetometer-compass-sensor/wiring-and-test