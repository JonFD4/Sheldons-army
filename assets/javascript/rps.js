/*Adding navbar toggle*/ 


/* Prompt for user name */
function inputNames(){ 
    let firstPlayerName= prompt("Enter your name, first player");
    return document.getElementById("playerName").innerHTML=` ${firstPlayerName} :`;
}
inputNames ();



let playerScore=0;
let computerScore=0;
let movesLeft =5;

function updateScore() {
    document.querySelector('.player-result').textContent = playerScore;
    document.querySelector('.cpu-result').textContent = computerScore;
    document.querySelector('.result-details').textContent;
    }
    /* Function to show message in result */
    function showResult(message) {
        document.querySelector('.result-details').textContent = message;
        }


/* Player Game logic and moves left */
        function playerGame() {
            const btnOptions = document.querySelectorAll('.choice');
            btnOptions.forEach(btnOption => {
            btnOption.addEventListener('click', function() {
            if (movesLeft > 0) {
            const playerSelect = btnOption.dataset.name;
            const computerSelect = computerChoice();
            movesLeft--;
            document.getElementById('movesLeft').textContent = movesLeft;
            console.log(playerSelect);
            console.log(computerSelect);
            compareChoices(playerSelect, computerSelect);
            } else {
            console.log('Game Over');
            if (playerScore > computerScore) {
            console.log('You win the game!');
            } else if (playerScore < computerScore) {
            console.log('Computer wins the game!');
            } else {
            console.log('It\'s a tie game!');
            }
            }
            });
            });
            }
/* Computer game logic*/
            function computerChoice() {
                let choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
                const randomBtn = Math.floor(Math.random() * choice.length);
                return choice[randomBtn];
                }
/* Compare Choice of computer and user*/
                function compareChoices(playerSelect, computerSelect) {
                    switch(true) {
                    case playerSelect === computerSelect:
                    console.log(`It's a tie!`);
                    showResult(`It's a tie!`);
                    break;
                    case (playerSelect === 'rock' && (computerSelect === 'scissors' || computerSelect === 'lizard')) ||
                    (playerSelect === 'paper' && (computerSelect === 'rock' || computerSelect === 'spock')) ||
                    (playerSelect === 'scissors' && (computerSelect === 'paper' || computerSelect === 'lizard')) ||
                    (playerSelect === 'lizard' && (computerSelect === 'paper' || computerSelect === 'spock')) ||
                    (playerSelect === 'spock' && (computerSelect === 'rock' || computerSelect === 'scissors')):
                    console.log(`You win!`);
                    showResult(`You win!`);
                    playerScore++;
                    break;
                    default:
                    console.log(`Computer wins!`);
                    showResult(`Computer wins!`);
                    computerScore++;

                    
                    }
                    

                    
                    updateScore();
                }
                   
                
                    
                    playerGame();

                 
                     