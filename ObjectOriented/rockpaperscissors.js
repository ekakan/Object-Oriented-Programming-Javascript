const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput
  }
  else{
    console.log('Input is not valid!')
  }
};

function getComputerChoice(){
  random = Math.floor(Math.random() * 3)
  switch (random){
    case 0:
    return 'rock'
    break;
    case 1:
    return 'paper'
    break;
    case 2:
    return 'scissors'
    break;
    default:
    console.log('Error !')
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return 'It is a tie!'
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer Won!'
    }
    else{
      return 'The User Won!'
    }
  }

  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer Won!'
    }
    else{
      return 'The User Won!'
    }
  }

  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer Won!'
    }
    else{
      return 'The User Won!'
    }
  }

  if (userChoice === 'bomb'){
    return 'The User Won!'
  }
}

function playGame(){
  userChoice = getUserChoice('bomb')
  computerChoice = getComputerChoice()
  console.log(`User choice: ${userChoice}`)
  console.log(`Computer choice: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
