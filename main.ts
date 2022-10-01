input.onButtonPressed(Button.A, function () {
    radio.sendString("GO")
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.West)
})
basic.pause(100)
basic.forever(function () {
    basic.showString("julian")
    music.rest(music.beat(BeatFraction.Quarter))
    music.playMelody("G F G A - F E D ", 500)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    5000,
    5000,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(204)
    basic.showNumber(100)
    for (let index = 0; index <= 2; index++) {
        basic.showString("lift off")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showNumber(0)
    }
    basic.showNumber(3210)
    radio.setGroup(1)
})
