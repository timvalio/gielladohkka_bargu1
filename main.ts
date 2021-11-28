input.onButtonPressed(Button.A, function () {
    dfplayermini.playFile(99, dfplayermini.isRepeat.No)
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.playFile(10, dfplayermini.isRepeat.No)
})
input.onGesture(Gesture.LogoDown, function () {
    dfplayermini.playFile(131, dfplayermini.isRepeat.No)
    basic.pause(500)
    dfplayermini.playFile(128, dfplayermini.isRepeat.No)
    basic.pause(500)
    dfplayermini.playFile(136, dfplayermini.isRepeat.No)
})
led.enable(false)
dfplayermini.connect(SerialPin.P1, SerialPin.P0)
dfplayermini.setVolume(30)
basic.forever(function () {
    // gállu
    if (pins.digitalReadPin(DigitalPin.P3) > 0) {
        dfplayermini.playFile(127, dfplayermini.isRepeat.No)
        basic.pause(500)
        dfplayermini.playFile(136, dfplayermini.isRepeat.No)
    }
    // čoavji
    if (pins.digitalReadPin(DigitalPin.P4) > 0) {
        dfplayermini.playFile(13, dfplayermini.isRepeat.No)
    }
    // olgeš juolgi
    if (pins.digitalReadPin(DigitalPin.P6) > 0) {
        dfplayermini.playFile(20, dfplayermini.isRepeat.No)
    }
    // olgeš giehta
    if (pins.digitalReadPin(DigitalPin.P7) > 0) {
        dfplayermini.playFile(15, dfplayermini.isRepeat.No)
    }
    // njunni
    if (pins.digitalReadPin(DigitalPin.P8) > 0) {
        dfplayermini.playFile(12, dfplayermini.isRepeat.No)
    }
    // gurut juolgi
    if (pins.digitalReadPin(DigitalPin.P9) > 0) {
        dfplayermini.playFile(21, dfplayermini.isRepeat.No)
    }
    // gurut giehta
    if (pins.digitalReadPin(DigitalPin.P10) > 0) {
        dfplayermini.playFile(14, dfplayermini.isRepeat.No)
    }
    if (pins.digitalReadPin(DigitalPin.P9) > 0 && pins.digitalReadPin(DigitalPin.P6) > 0) {
        dfplayermini.playFile(17, dfplayermini.isRepeat.No)
    }
})
