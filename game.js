/*

Rock beats scissor but loses to paper
Scissor beats paper but loses to rock
Paper beats rock but loses to scissor
Same = tie

so 

Rock > Scissor > Paper > Rock . . .

*/


let arr = ["rock", "scissors", "paper"];

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

