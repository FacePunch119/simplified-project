radio.onReceivedString(function (receivedString) {
    while (true) {
        basic.showString(receivedString)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            basic.pause(500)
            basic.pause(250)
        }
    }
})
basic.forever(function () {
    let Pressure = 0
    radio.setGroup(130)
    if (Pressure < 180) {
        basic.showIcon(IconNames.Yes)
    } else if (Pressure > 180) {
        while (true) {
            radio.sendString("Intruder!")
        }
    }
})
