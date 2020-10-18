let humidity = 0
basic.forever(function () {
    let les_av = 0
    humidity = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    les_av,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(les_av)
    }
})
