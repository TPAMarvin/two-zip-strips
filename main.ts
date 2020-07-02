input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 350)
    basic.pause(2000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip2.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip2.clear()
    strip2.show()
})
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
