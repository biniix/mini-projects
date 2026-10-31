let score = JSON.parse(localStorage.getItem('score'));
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
     };
  }

scoreupdate();

function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <1/3) {
    computerMove = '✊';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = '✋';
  } else {
    computerMove = '✌️';
  }
  return computerMove;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
    const computerMove = pickComputerMove();
    play(computerMove);
  },1000);
  isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function play(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  if (computerMove == playerMove){
    result = 'tie';
  } else if (
    (playerMove === '✊' && computerMove === '✌️') ||
    (playerMove === '✋' && computerMove === '✊') ||
    (playerMove === '✌️' && computerMove === '✋')
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }
  if(result == 'win'){
    score.wins++;
  }else if (result == 'lose'){
    score.losses ++;
  }else{
    score.ties ++;
}

localStorage.setItem('score', JSON.stringify(score));

scoreupdate();

document.querySelector('.result').innerHTML = `You ${result}!`;
document.querySelector('.moves').innerHTML = `You picked ${playerMove}, computer picked ${computerMove}.`;
    
}
function scoreupdate() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}