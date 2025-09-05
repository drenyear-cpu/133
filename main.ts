input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . . #
        # # # # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    A += 1
    B += 1
    C += 1
    basic.clearScreen()
})
let A = "A=" + "A"
let B = "B=" + "B"
let C = "C=" + "C"
basic.clearScreen()
