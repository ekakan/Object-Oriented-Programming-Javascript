let raceNumber = Math.floor(Math.random() * 1000); // 0 - 999?
//console.log(raceNumber)
// let is immutable which var is mutable
const registeredEarly = false
var runnerAge = 18

if (runnerAge >= 18 && registeredEarly){
  raceNumber += 1000
}

//console.log(raceNumber)

if (runnerAge > 18 && registeredEarly){
  console.log(`Runner #${raceNumber} your race is at 9:30 am.`)
}
else if (runnerAge > 18 && !registeredEarly){
  console.log(`Runner #${raceNumber} your race is at 11:00 am.`)
}
else if (runnerAge < 18){
  console.log(`Runner #${raceNumber} your race is at 12:30 pm.`)
}
else {
  console.log(`Runner #${raceNumber}, report to the registration desk.`)
}
