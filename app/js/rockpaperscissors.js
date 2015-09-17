
//'use strict';
var playerMove;
function getInput() {
    playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    //return prompt();
}

var computerMove;
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerMove = "rock";
    } else if (randomNumber < 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
}


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return move === move || getInput();
    //return move === playerMove || getInput();
    if (move === move) {
        return playerMove;
    }
    else getInput();
}


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //return move === computerMove || randomPlay();
    //return (move === randomPlay());
    if (move === move) {
        return computerMove;
    }
    else randomPlay();
}

   
    function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    //if (playerMove === computerMove) {
    //    winner = "tie";
    //}
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if (playerMove === "rock" && computerMove === "rock") {
        winner = "tie";
    }

    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "paper") {
        winner = "tie";
    }

    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "scissors") {
        winner = "tie";
    }
    else winner = "there was a problem";
    return winner;
}    


function playToFive() {
    console.log("Let\'s play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        getInput();
        randomPlay();
        getPlayerMove();
        getComputerMove();
        winner = getWinner();   
        if (winner === "player") {
            playerWins++;
            console.log(playerMove);
            console.log(computerMove);
            console.log("winner is " + winner);
        } else if (winner === "computer") {
            computerWins++;
            console.log(playerMove);
            console.log(computerMove);
            console.log("winner is " + winner);
        } else if (winner === "tie") {
            console.log(playerMove);
            console.log(computerMove);
            console.log("no one wins - it was a " + winner);
        }
    }
    return [playerWins, computerWins];
}

playToFive();


/*

getInput();
randomPlay();
getPlayerMove();
getComputerMove();
console.log(playerMove);
console.log(computerMove);
getWinner();

*/
