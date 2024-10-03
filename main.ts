let GameNumber = randint(1, 10)
let GuessNumber = game.askForNumber("Guess a number 1-10")
if (GameNumber == GuessNumber) {
    game.splash("Great Guess!")
} else {
    game.splash("No it was " + GameNumber)
}
