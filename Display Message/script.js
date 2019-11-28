//Send Message Function
const inputMsg = document.getElementById('msgInput');
const btnMsg = document.getElementById('msgBtn');
const hdnMsg = document.getElementById('hiddenMessage');

function showMsg(){
  //Take the value from the input
  let inputValue = inputMsg.value;

  //If there is a value, show it
  if (inputValue != "") {
    hdnMsg.innerHTML = inputValue;
  }
  else {
    //If there is no value, send an alert
    alert('Please Write a Message!')
  }
};

btnMsg.addEventListener('click', showMsg)
