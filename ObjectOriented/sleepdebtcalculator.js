const getSleepHours = day => {
  day = day.toLowerCase()
  switch (day){
    case 'monday':
    return 8
    case 'tuesday':
    return 5
    case 'wednesday':
    return 7
    case 'thursday':
    return 8
    case 'friday':
    return 8
    case 'saturday':
    return 9
    case 'sunday':
    return 6
    default:
    return 'Invalid Input!'
  }
}

//console.log(getSleepHours('Monday'))
function getActualSleepHours(){
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
}

//console.log(getActualSleepHours())

function getIdealSleepHours(idealHours){
  //var idealHours = 8
  return idealHours * 7
}

//console.log(getIdealSleepHours())

function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours()
  var idealSleepHours = getIdealSleepHours(8) // Pass your ideal daily hours into this function
  var hours = Math.abs(idealSleepHours - actualSleepHours)

  if(actualSleepHours === idealSleepHours){
    console.log('User got the perfect amount of sleep. Way to go.')
  }
  else if (actualSleepHours > idealSleepHours){
    console.log('User got more sleep than needed. You are fine for the day. You overslept by ' + hours + ' hours.')
  }
  else if (actualSleepHours < idealSleepHours){
    console.log('User got less sleep than needed. You should probably lay down. You need ' + hours + ' more hours of sleep')
  }
}

calculateSleepDebt()
