const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse') //Check to see if it has this

  if(value) { //If exist, remove class; if it does not exist, add class
    navbarLinks.classList.remove('navbar__collapse');
    navbarBtn.classList.remove('change')
  }
  else{
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change');
  }
})
