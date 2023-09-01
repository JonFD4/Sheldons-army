/*function inputNames(){ 
    let firstPlayerName= prompt("Enter your name, first player");
    return document.getElementById("playerName").innerHTML=` ${firstPlayerName} :`;
}
inputNames ();

*/

let playerScore=0;
let computerScore=0;
let movesLeft =5;
function updateScore() {
    document.querySelector('.player-result').textContent = playerScore;
    document.querySelector('.cpu-result').textContent = computerScore;
    document.querySelector('.result-details').textContent = `You: ${playerScore} Computer: ${computerScore}`;
    }
   