const displayScreen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");

const equalBtn = document.querySelector(".btn-equal")
const clearBtn = document.querySelector(".btn-clear")

const operatorBtn = document.querySelector(".btn-yellow")
const numberBtn = document.querySelector(".btn-gray")

//Display Items to the Screen
for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
    let number = btns[i].getAttribute('data-num'); //grab the attribute of the button
    displayScreen.value += number; //Add Values to the Display Screen
  })
}

//Evaluate for the Equal Button
equalBtn.addEventListener('click', function(){
  if (displayScreen.value === ""){
    alert("INPUT IS EMPTY")
  }
  else{
    let value = eval(displayScreen.value); //Evaluate after hitting the equal button
    displayScreen.value = value; //Screen will display what is evaluated
  }
})

//Clear Function
clearBtn.addEventListener('click', function(){
  displayScreen.value = ""; //Set Screen to an empty value
})
