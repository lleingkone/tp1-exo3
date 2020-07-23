let posX = 2
let posY = 2
let direction = 1
led.plot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posY)
    posY += direction
    led.plot(posX, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    basic.pause(200)
    if (led.point(0, 0)) {
        led.plotBrightness(posX, posY, 86)
    }
})
