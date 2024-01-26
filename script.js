
/*
const prompt=require("prompt-sync")({sigint:true}); 
function playRound(playerSelection,computerSelection)
{

    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function getComputedChoice()
{
    let rps=["rock","paper","scissors"];
    let random = rps[Math.floor(Math.random()*rps.length)];
    return random;
}

function game()
{
    for ( let i =0;i<5;i++)
    {
        let computerSelection=getComputedChoice();
    let playerSelection=prompt("enter your choice: ");
    console.log(playRound(playerSelection,computerSelection));


    }
}
game();
    
*/


    const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
 


