const mainBody = document.querySelector('body');
const colorBtn = document.getElementById('buttonTest');
const hexColor = document.getElementById('hexColor');

const alphabetNum = ['a','b','c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function changeColor(){
  //Math Floor = round number down and return an integer
  //Math Random = Return a Range from 0-1 (not including 1)
  const hash = '#';
  let randomLtr1 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];
  let randomLtr2 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];
  let randomNum1 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];
  let randomNum2 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];
  let randomNum3 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];
  let randomNum4 = alphabetNum[Math.floor(Math.random() * alphabetNum.length)];

  let hex = hash.concat(randomLtr1,randomLtr2,randomNum1,randomNum2,randomNum3,randomNum4);

  //Change the Background
  mainBody.style.backgroundColor = hash;
  //Change the HTML
  hexColor.innerHTML = hash;
}

colorBtn.addEventListener('click', changeColor);
