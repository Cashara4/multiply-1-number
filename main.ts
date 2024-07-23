input.onButtonPressed(Button.A, function () {
    // Aquí en el primer botón pondríamos la tabla que queremos trabajar. En este caso el 3.
    Factor_A = 3
    basic.showNumber(Factor_A)
    basic.pause(500)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Factor_A * Factor_B)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Fin")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Factor_B = randint(0, 10)
    basic.showNumber(Factor_B)
    basic.pause(500)
})
let Factor_B = 0
let Factor_A = 0
basic.showString("Multiply")
basic.forever(function () {
	
})
