let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)

basic.forever(function () {

    let x = input.rotation(Rotation.Roll)
    let y = input.rotation(Rotation.Pitch)
    let z = input.acceleration(Dimension.Z)

    if (Math.abs(x) > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    else if (Math.abs(y) > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    else if (Math.abs(z) > 700) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }

    strip.show()
})