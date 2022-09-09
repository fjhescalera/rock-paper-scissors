function getComputerChoice(){   
    let randomNum=Math.floor(Math.random()*9);
    /*console.log(randomNum);
      console.log(typeof randomNum);USED TO CHECK IF CHOICE ERROR WAS DUE TO WRONG TYPE OF RANDOMNUM,NO*/
    if (randomNum===0||randomNum===1||randomNum===2){
        /*console.log("Rock");*/
        return choice="rock";
    }
    else if (randomNum===3||randomNum===4||randomNum===5){
        /*console.log("Paper");*/
        return choice="paper";
    }
    else{
        /*console.log("Scissors");*/
        return choice="scissors";
    }
}
let playerScore=0;
let computerScore=0;
let player=document.querySelector(".player");
let computer=document.querySelector(".computer");
let buttons=document.querySelectorAll("button");
let result=document.querySelector(".result");
let score=document.querySelector(".score");
let title=document.querySelector(".title");
buttons.forEach(button=>button.addEventListener("click",playRound.bind(button)));
function checkScore(){
    if(playerScore>=5){
        alert(`YOU WIN!! ${playerScore}-${computerScore}!`);
        result.textContent="";
        score.textContent=`The final score is:`;
        title.textContent=`Click to play again:`;
        player.textContent=`Player:${playerScore}`;
        computer.textContent=`PC: ${computerScore}`;
        playerScore=0;
        computerScore=0;
}
    else if(computerScore>=5){
        alert(`GAME OVER ${computerScore}-${playerScore} :(`);
        result.textContent="";
        score.textContent=`The final score is:`;
        title.textContent=`Click to play again:`;
        player.textContent=`Player:${playerScore}`;
        computer.textContent=`PC: ${computerScore}`;
        playerScore=0;
        computerScore=0;
    }
}
function playRound(){
    computerChoice=getComputerChoice();
    playerChoice=this.classList.value;
    title.textContent=`Chose a shape:`;
    alert(`Computer chose ${computerChoice} and you chose ${playerChoice}, let's see...`)
    if (playerChoice===computerChoice){
        tiedGame();
        updateScore();
        checkScore(); 
    }
    else if ((playerChoice==="rock"&&computerChoice==="scissors")||(playerChoice==="paper"&&computerChoice==="rock")||
            (playerChoice==="scissors"&&computerChoice==="paper")){
         wonGame();
         updateScore();
         checkScore();       
    }
    else {
        lostGame();
        updateScore();
        checkScore(); 
    }
}
function tiedGame(){
    result.style.borderStyle='solid';
    result.style.borderColor='white';
    result.style.backgroundColor='blue';
    result.style.color='white';
    result.textContent='It\'s a tie!';
    playerScore+=1;
    computerScore+=1;
}
function wonGame(){
    result.style.borderStyle='solid';
    result.style.borderColor='black';
    result.style.backgroundColor='green';
    result.style.color="white";
    result.textContent="You win!";
    playerScore+=1;
}
function lostGame(){
    result.style.borderStyle='solid';
    result.style.borderColor='black';
    result.style.backgroundColor='red';
    result.style.color="white";
    result.textContent="You lose :(";
    computerScore+=1;
}
function updateScore(){
    score.textContent=`The score is:`;
    player.textContent=`Player:${playerScore}`;
    computer.textContent=`PC: ${computerScore}`;
}
/*function game(){
    let score=0;
    for (let i=0;i<=4;i++){
        playRound();
        if (result==="winner!"){
            score++;
        }
        else if (result==="loser!"){
            score=score-1
        }
        alert(`Your score is ${score}`);

    }
    if(score>=3){
        alert(`You won ${score} out of 5 rounds gz!`);
    }
    else{
        alert("Computer beat you...better luck next time");
    }
}*/

/*function getPlayerChoice(){   
    let playerChoice = prompt("What do you play? Rock, paper or scissors?");
    if (playerChoice.toLowerCase().trim()==="rock"){
        return "Rock";
    }
    else if (playerChoice.toLowerCase().trim()==="paper"){
        return "Paper";
    }
    else if (playerChoice.toLowerCase().trim()==="scissors"){
        return "Scissors"
    }
    else {
        alert("That's not a valid option! Try again");
        return getPlayerChoice();
}*/


