basic.forever(function () {
    radio.setGroup(130)
    if (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Yes)
    } else if (input.lightLevel() > 128) {
        for (let index = 0; index < 1; index++) {
            radio.sendString("Intruder!")
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            basic.pause(750)
        }
    }
})
