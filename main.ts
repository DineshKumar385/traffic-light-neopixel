let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)

// store last detected axis
let lastAxis = -1

// random colors for LEDs
let r1 = 0
let g1 = 0
let b1 = 0

let r2 = 0
let g2 = 0
let b2 = 0

let r3 = 0
let g3 = 0
let b3 = 0

basic.forever(function () {

    let x = Math.abs(input.acceleration(Dimension.X))
    let y = Math.abs(input.acceleration(Dimension.Y))
    let z = Math.abs(input.acceleration(Dimension.Z))

    let axis = 0

    // detect strongest tilt axis
    if (x > y && x > z) {
        axis = 0
    } else if (y > x && y > z) {
        axis = 1
    } else {
        axis = 2
    }

    // if axis changed → generate new random colors
    if (axis != lastAxis) {

        r1 = randint(0, 255)
        g1 = randint(0, 255)
        b1 = randint(0, 255)

        r2 = randint(0, 255)
        g2 = randint(0, 255)
        b2 = randint(0, 255)

        r3 = randint(0, 255)
        g3 = randint(0, 255)
        b3 = randint(0, 255)

        lastAxis = axis
    }

    // brightness levels
    let bright = 255
    let mid = 120
    let dim = 30

    if (axis == 0) {   // X axis strongest
        strip.setPixelColor(0, neopixel.rgb(r1 * bright / 255, g1 * bright / 255, b1 * bright / 255))
        strip.setPixelColor(1, neopixel.rgb(r2 * mid / 255, g2 * mid / 255, b2 * mid / 255))
        strip.setPixelColor(2, neopixel.rgb(r3 * dim / 255, g3 * dim / 255, b3 * dim / 255))

    } else if (axis == 1) {  // Y axis strongest
        strip.setPixelColor(0, neopixel.rgb(r1 * dim / 255, g1 * dim / 255, b1 * dim / 255))
        strip.setPixelColor(1, neopixel.rgb(r2 * bright / 255, g2 * bright / 255, b2 * bright / 255))
        strip.setPixelColor(2, neopixel.rgb(r3 * mid / 255, g3 * mid / 255, b3 * mid / 255))

    } else {   // Z axis strongest
        strip.setPixelColor(0, neopixel.rgb(r1 * mid / 255, g1 * mid / 255, b1 * mid / 255))
        strip.setPixelColor(1, neopixel.rgb(r2 * dim / 255, g2 * dim / 255, b2 * dim / 255))
        strip.setPixelColor(2, neopixel.rgb(r3 * bright / 255, g3 * bright / 255, b3 * bright / 255))
    }

    strip.show()

    basic.pause(100)
})