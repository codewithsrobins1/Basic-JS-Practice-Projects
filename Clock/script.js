function displayClock () {
  let date = new Date();
  let hours = date.getHours(); //0 - 23
  let minutes = date.getMinutes() //0-59
  let seconds = date.getSeconds() //0-59

  let formatHours = convertFormat(hours)

  hours = checkTime(hours)

  hours = addZero(hours)
  minutes = addZero(minutes)
  seconds = addZero(seconds)

  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

}

//Convert Time From AM or PM
function convertFormat(time){
  let format = 'AM'
  if (time >= 12) {
    format = 'PM'
  }
  return format;
}

//Function to Change time from 24hr clock to 12hr
function checkTime(time){
  if (time > 12){
    time = time - 12
  }
  if(time === 0){
    time = 12;
  }

  return time;
}

//Add Zero In Front of Time if under 10
function addZero(time){
  if (time < 10){
    time = '0' + time;
  }
  return time;
}


displayClock();
setInterval(displayClock,1000) //Takes a callback function & time interveral
