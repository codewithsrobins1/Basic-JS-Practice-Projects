const quoteBtn = document.getElementById('quoteBtn');
const quoteDisplay = document.getElementById('quote')
const quoteAuth = document.getElementById('person')

const simpleQuotes = [
  {
    name: 'Gandhi',
    quote: 'Be the change you want to see in the world'
  },
  {
    name: 'Kawhi',
    quote: 'What it do baby'
  },
  {
    name: 'Caesar',
    quote: 'Et tu Brute'
  }
];

function changeQte() {
    let namePlaceholder = "";
    let quotePlaceholder = "";

  //Generate a random number from 0-2
  for(let i = 0; i < simpleQuotes.length; i++) {
    let randomNum = Math.floor(Math.random() * simpleQuotes.length)

    //After selecting, grab the name and quote
    namePlaceholder = simpleQuotes[randomNum].name;
    quotePlaceholder = simpleQuotes[randomNum].quote;
  }


  //take values and apply to quote and person IDs
  quoteDisplay.innerHTML = quotePlaceholder;
  quoteAuth.innerHTML = namePlaceholder;
}

quoteBtn.addEventListener('click', changeQte);
