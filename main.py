def on_microbit_id_button_a_evt_click():
    dfplayermini.play_file(9, dfplayermini.isRepeat.NO)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
    on_microbit_id_button_a_evt_click)

def on_gesture_logo_up():
    dfplayermini.play_file(8, dfplayermini.isRepeat.NO)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

led.enable(False)
dfplayermini.connect(SerialPin.P1, SerialPin.P0)
dfplayermini.set_volume(30)

def on_forever():
    # gállu
    if pins.digital_read_pin(DigitalPin.P3) > 0:
        dfplayermini.play_file(123, dfplayermini.isRepeat.NO)
    # čoavji
    if pins.digital_read_pin(DigitalPin.P4) > 0:
        dfplayermini.play_file(2, dfplayermini.isRepeat.NO)
    # olgeš juolgi
    if pins.digital_read_pin(DigitalPin.P6) > 0:
        dfplayermini.play_file(3, dfplayermini.isRepeat.NO)
    # olgeš giehta
    if pins.digital_read_pin(DigitalPin.P7) > 0:
        dfplayermini.play_file(4, dfplayermini.isRepeat.NO)
    # njunni
    if pins.digital_read_pin(DigitalPin.P8) > 0:
        dfplayermini.play_file(5, dfplayermini.isRepeat.NO)
    # gurut juolgi
    if pins.digital_read_pin(DigitalPin.P9) > 0:
        dfplayermini.play_file(6, dfplayermini.isRepeat.NO)
    # gurut giehta
    if pins.digital_read_pin(DigitalPin.P10) > 0:
        dfplayermini.play_file(7, dfplayermini.isRepeat.NO)
basic.forever(on_forever)
