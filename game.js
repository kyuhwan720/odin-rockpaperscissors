/*

Rock beats scissor but loses to paper
Scissor beats paper but loses to rock
Paper beats rock but loses to scissor
Same = tie

so 

Rock > Scissor > Paper > Rock . . .

*/

let playerSelection;
let arr = ["Rock", "Scissors", "Paper"];
let Rock, Scissors, Paper;

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function choice()
{
    let computerSelection = arr[(Math.floor(Math.random() * arr.length))];
    cpu.textContent = "Computer put out " + computerSelection;

    playerSelection = this.id;

    if (playerSelection === computerSelection) 
    {
        result.textContent = "It's a tie!";
        ties++;
    } 
    else if 
        (
        (playerSelection === "Rock" && computerSelection === "Scissors") 
        ||
        (playerSelection === "Paper" && computerSelection === "Rock") 
        ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        )
    {
        result.textContent = "You win!";
        playerWins++;
    } 
    else 
    {
        result.textContent = "Computer wins!";
        computerWins++;
    }

    updateScoreboard();
}

function updateScoreboard() {
    playerScore.textContent = "Player Wins: " + playerWins;
    computerScore.textContent = "Computer Wins: " + computerWins;
    tiesScore.textContent = "Ties: " + ties;
}

Rock = document.getElementById("Rock");
Scissors = document.getElementById("Scissors");
Paper = document.getElementById("Paper");

cpu = document.getElementById("cpu");
result = document.getElementById("result");

playerScore = document.getElementById("playerScore");
computerScore = document.getElementById("computerScore");
tiesScore = document.getElementById("tiesScore");

Rock.addEventListener("click", choice);
Scissors.addEventListener("click", choice);
Paper.addEventListener("click", choice);

/* Below code is for console play only. Will not work with UI.
OBSOLETE

function userInput()
{
    
    while(true)
    {
        let playerSelection = prompt("Rock, Scissors, Paper? ");

        playerSelection = playerSelection.toLowerCase();

        if (playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")
        {
            console.log(playerSelection);
            return playerSelection;
        }
        else 
        {
            alert("Invalid choice. Please try again.");
        }
    }
}

function playRound(playerSelection) 
{
    let computerSelection = arr[(Math.floor(Math.random() * arr.length))];
    console.log(computerSelection);

    if (playerSelection === computerSelection) 
    {
        return "It's a tie!";
    } 
    else if 
        (
        (playerSelection === "rock" && computerSelection === "scissors") 
        ||
        (playerSelection === "paper" && computerSelection === "rock") 
        ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) 
    {
        return "You win!";
    } 
    else 
    {
        return "Computer wins!";
    }
}

const playerSelection = userInput();
console.log(playRound(playerSelection));

*/