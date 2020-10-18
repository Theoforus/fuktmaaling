let humidity = 0
let Pumpe = 0
basic.forever(function () {
    humidity = pins.analogReadPin(AnalogPin.P0)
    if (humidity < 300) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (humidity < 300) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    if (humidity < 300) {
        let Pumpe_på = 0
        Pumpe = Pumpe_på
        basic.pause(5000)
    }
})
