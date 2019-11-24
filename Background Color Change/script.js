//Background Color Change

//Target the Button
//Target the body
//Add Event Listener to Button When Clicked
//Change the Background Color from an array

const mainBody = document.querySelector('body');
const colorBtn = document.getElementById('buttonTest');

const colors = ['yellow', 'green', 'red', 'dodgerblue', 'white'];

function changeColor(){
  //Math Floor = round number down and return an integer
  //Math Random = Return a Range from 0-1 (not including 1)
  let random = Math.floor(Math.random()*colors.length);

  mainBody.style.backgroundColor = colors[random];
}

colorBtn.addEventListener('click', changeColor);
