var userName = ''
// if (userName.length > 0) {
//   console.log('Hello, ' + userName)
// }
// else {
//   console.log('Hello!')
// }
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

var userQuestion = 'Is everything going to be alright?'
console.log(userQuestion)

var randomNumber = Math.floor(Math.random() * 8)

var eightBall = ''

switch(randomNumber) {
  case 0:
  eightBall = 'It is certain'
  break;
  case 1:
  eightBall = 'It is decidedly so'
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4:
  eightBall = 'Do not count on it'
  break;
  case 5:
  eightBall = 'My sources say no'
  break;
  case 6:
  eightBall = 'Outlook not so good'
  break;
  case 7:
  eightBall = 'Signs point to yes'
  break;
  default:
  console.log('You are just unlucky I guess. Try again')
}
console.log(eightBall)

var eightBall2 = ''
if (randomNumber == 0){
  eightBall2 = 'It is certain'
}
else if (randomNumber == 1){
  eightBall2 = 'It is decidedly so'
}
else if (randomNumber == 2){
   eightBall2 = 'Reply hazy try again'
}
else if (randomNumber == 3){
  eightBall2 = 'Cannot predict now'
}
else if (randomNumber == 4){
  eightBall2 = 'Do not count on it'
}
else if (randomNumber == 5){
  eightBall2 = 'My sources say no'
}
else if (randomNumber == 6){
  eightBall2 = 'Outlook not so good'
}
else if (randomNumber == 7){
  eightBall2 = 'Signs point to yes'
}
else {
  console.log('You are just unlucky I guess. Try again')
}
console.log(eightBall2)
