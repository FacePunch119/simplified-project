basic.forever(function () {
    let Pressure = 0
    radio.setGroup(130)
    if (Pressure < 500) {
        basic.showIcon(IconNames.Yes)
    } else if (Pressure > 500) {
        while (true) {
            radio.sendString("Intruder!")
        }
    }
})
