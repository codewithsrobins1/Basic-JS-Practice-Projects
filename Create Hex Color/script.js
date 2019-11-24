//Change Background Color
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

// //Colors needs to change to a random string
// //#
// //String with all letters of the alphabet
// alphabet = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
// 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
// 'y', 'z']
// randomLtr = Math.floor(Math.random() * alphabet.length);
// alphabet[randomLtr]
// //string with numbers from 0-9
// numbers = ['0','1','2', '3', '4', '5', '6', '7', '8', '9']
// randomNum = Math.floor(Math.random() * numbers.length);
// numbers[randomNum]
// //Connect the Values
// innerHTML = '# + alphabet[random] + alphabet[random] + numbers[random] + numbers[random] + numbers[random] + numbers[random] '
// //need to insert that string to the span html
