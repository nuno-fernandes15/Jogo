input.onButtonPressed(Button.A, function () {
    basic.showString("You")
    Tesoura = 2
    basic.showIcon(IconNames.Scissors)
    basic.showIcon(IconNames.Scissors)
    basic.showString("Micro")
    Microbit = randint(2, 4)
    if (Microbit == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.showIcon(IconNames.Scissors)
        basic.showString("Tie!")
    }
    if (Microbit == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Chessboard)
        basic.showString("You win!")
    }
    if (Microbit == 3) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallSquare)
        basic.showString("You loose!")
    }
    game.resume()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("You")
    Papel = 4
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Chessboard)
    basic.showString("Micro")
    Microbit = randint(2, 4)
    if (Microbit == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Chessboard)
        basic.showString("Tie!")
    }
    if (Microbit == 3) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallSquare)
        basic.showString("You win!")
    }
    if (Microbit == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.showIcon(IconNames.Scissors)
        basic.showString("You lose!")
    }
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("You")
    Pedra = 3
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallSquare)
    basic.showString("Micro")
    Microbit = randint(2, 4)
    if (Microbit == 3) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallSquare)
        basic.showString("Tie!")
    }
    if (Microbit == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.showIcon(IconNames.Scissors)
        basic.showString("You win!")
    }
    if (Microbit == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Chessboard)
        basic.showString("You lose!")
    }
    game.resume()
})
let Papel = 0
let Pedra = 0
let Tesoura = 0
let Microbit = 0
basic.showString("Starting Game")
Microbit = 1
Tesoura = 2
Pedra = 3
Papel = 4
basic.showIcon(IconNames.Yes)
basic.showString("Choose!")
