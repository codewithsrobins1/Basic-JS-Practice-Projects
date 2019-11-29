const btnPrev = document.querySelector('.prevBtn');
const btnNext = document.querySelector('.nextBtn');
const imageContainer = document.querySelector('.images');

let imageCount = 2;

// Change Image Container when hitting Next Button
function previousImage(){
  imageContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}],
  {duration: 1000, fill: 'forwards'});

  if (imageCount === 1){
    imageCount = 5
  }
  imageCount--;

  imageContainer.style.backgroundImage = `url(img/bcg-${imageCount}.jpg)`
}

//Change Image Container when hitting Prev button
function nextImage(){
  imageContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}],
  {duration: 1000, fill: 'forwards'});
  
  if (imageCount === 5){
    imageCount = 1
  }
  imageCount++;

  imageContainer.style.backgroundImage = `url(img/bcg-${imageCount}.jpg)`
}

btnPrev.addEventListener('click', previousImage);
btnNext.addEventListener('click', nextImage);
