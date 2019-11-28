let counter = document.querySelector('.counter');
const addCount = document.querySelector('#btnAdd');
const lowerCount = document.querySelector('#btnLower');


let count = 0;

lowerCount.addEventListener('click', decreaseCount);
addCount.addEventListener('click', raiseCount);

//Add to the Count
function raiseCount(){
  count++;
  counter.innerHTML = count;

  if (count > 0){
    counter.style.color = 'green'
  }
  else if (count === 0){
    counter.style.color = 'black'
  }
};

//Subtract from the Count
function decreaseCount(){
  count--;
  counter.innerHTML = count;

  if (count < 0){
    counter.style.color = 'red'
  }
  else if (count === 0){
    counter.style.color = 'black'
  }
};
