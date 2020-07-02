input.onButtonPressed(Button.A, function () {
    strip.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 350)
    basic.pause(2000)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
