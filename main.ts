controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    answer = randint(1, 4)
    if (answer == 1) {
        game.splash("Signs look good")
    } else if (answer == 2) {
        game.splash("Could be")
    } else if (answer == 3) {
        game.splash("Not very likely")
    } else {
        game.splash("Probably mot ")
    }
})
let answer = 0
game.splash("Think of a question", "then press A")
