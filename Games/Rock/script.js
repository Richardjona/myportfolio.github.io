computer = document.getElementById('computer-choice')
player = document.getElementById('player-choice')
choices = document.querySelectorAll('button')
resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

choices.forEach(choi => choi.addEventListener('click', (e)=>{
    userChoice = e.target.id 
    player.innerHTML = userChoice
   
   generateNumbers()
   Result()
}))

function generateNumbers(){
    randomNumber = Math.floor(Math.random()*3) + 1
    console.log(randomNumber)

    if (randomNumber == 1){computerChoice = 'rock'
  }else if(randomNumber == 2){computerChoice = 'Paper'
  }else computerChoice == 'scissors'

  computer.innerHTML = computerChoice
  Result()
}

function Result(){
 if (computerChoice === userChoice) {result = 'It\'s a draw!!'}
  if (computerChoice === 'rock' && userChoice == 'scissors'){ result ='You Lose!!'}
  if (computerChoice === 'rock'&& userChoice == 'paper'){ result = 'You Lose!!'}
  if (computerChoice === 'paper'&& userChoice == 'rock'){result = 'You win!!'}
  if (computerChoice === 'scissors'&& userChoice == 'paper'){result = 'You win!!'}
  if (computerChoice === 'scissors'&& userChoice == 'rock'){result = 'You win!!'}
  if (computerChoice === 'paper'&& userChoice == 'scissors'){result = 'You lose!!'}

  resultDisplay.innerHTML = result
  
}

