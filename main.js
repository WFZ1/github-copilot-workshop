// Write a rock, paper, scissors game

// 1. Create a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// 2. Create a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    }
};

// define main function that handles all the logic

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // loop through 5 rounds, keeping track of score
    for (let i = 0; i < 5; i++) {
        // prompt user for input
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = computerPlay();
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        // if player wins, add 1 to playerScore
        if (playRound(playerSelection, computerSelection).includes('win')) {
            playerScore++;
            console.log(`Player score: ${playerScore}`);
        } else if (playRound(playerSelection, computerSelection).includes('lose')) {
            computerScore++;
            console.log(`Computer score: ${computerScore}`);
        }
    }
    // after 5 rounds, determine winner
    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (computerScore > playerScore) {
        console.log('You lose!');
    } else {
        console.log("It's a tie!");
    }
};

game();
