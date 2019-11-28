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

  counter.animate(
    [{opacity: '0.4'},{opacity: '1.0'}], //Start and End of Opacity
    {duration: 1000, fill: 'forwards'} //Go to state where animate finishes; not start
  )
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
  counter.animate(
    [{opacity: '0.4'},{opacity: '1.0'}], //Start and End of Opacity
    {duration: 800, fill: 'forwards'} //Go to state where animate finishes; not start
  )
};
