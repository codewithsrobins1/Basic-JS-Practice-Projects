const mainBody = document.querySelector('body');
const colorBtn = document.getElementById('buttonTest');
const hexColor = document.getElementById('hexColor');

const alphabetNum = ['a','b','c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//Change Background Color Function
function changeColor(){
  //Math Floor = round number down and return an integer
  //Math Random = Return a Range from 0-1 (not including 1)
  let hash = '#';

  for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * alphabetNum.length);
    hash += alphabetNum[random]; //add to the has string
  };

  //Change the Background
  mainBody.style.backgroundColor = hash;
  //Change the HTML
  hexColor.innerHTML = hash;
}

colorBtn.addEventListener('click', changeColor);
