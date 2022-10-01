def on_button_pressed_a():
    radio.send_string("GO")
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_arrow(ArrowNames.NORTH_WEST)
radio.set_group(1)
basic.show_string("julian")
basic.show_icon(IconNames.ANGRY)
music.play_melody("C5 B A G F E D C ", 4)
basic.show_number(3210)
basic.show_number(100)
for index in range(101):
    basic.show_string("lift off")
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_number(0)

def on_forever():
    pass
basic.forever(on_forever)
