let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)

basic.forever(function () {

    // random color for LED 1
    let r1 = randint(0, 255)
    let g1 = randint(0, 255)
    let b1 = randint(0, 255)

    // random color for LED 2
    let r2 = randint(0, 255)
    let g2 = randint(0, 255)
    let b2 = randint(0, 255)

    // random color for LED 3
    let r3 = randint(0, 255)
    let g3 = randint(0, 255)
    let b3 = randint(0, 255)

    // LED 1
    strip.clear()
    strip.setPixelColor(0, neopixel.rgb(r1, g1, b1))
    strip.show()
    basic.pause(200)

    // LED 2
    strip.clear()
    strip.setPixelColor(1, neopixel.rgb(r2, g2, b2))
    strip.show()
    basic.pause(200)

    // LED 3
    strip.clear()
    strip.setPixelColor(2, neopixel.rgb(r3, g3, b3))
    strip.show()
    basic.pause(200)

})