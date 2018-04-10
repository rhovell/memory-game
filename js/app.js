/*
 * Create a list that holds all of your cards
 */
var cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle',
'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
var openCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// create container div
const container = document.createElement('div');
// add container div to body
document.body.append(container);
container.classList = 'container';
// moves javascript link to bottom of body
$('#js').insertAfter(container);
// console.log("js moved");
// create deck ul list
const dealtCards = document.createElement('ul');
dealtCards.classList = 'deck';
// add cards to deck
container.appendChild(dealtCards);
// shuffle cards
cardList = shuffle(cards);
let placedCard;
let cardDetails;
// place li card elements
for (var i = 0; i < cards.length; i++) {
  let placedCard = document.createElement('li');
  placedCard.classList = 'card';
  dealtCards.appendChild(placedCard);
  // place card details
  let cardDetails = document.createElement('i');
  cardDetails.classList = 'fa ' + cardList[i];
  placedCard.appendChild(cardDetails);
}
  dealtCards.addEventListener('click', respondToTheClick);

// function to call all other functions when card is clicked
function respondToTheClick(e) {
  // check if the target that is clicked is the li
  if (e.target.tagName === 'LI') {
    // toggles open and show class
    e.target.classList.add('open','show');
    // fucntion variables
    let choice = document.querySelector('.card.open.show');
    let choices = e.target.firstChild.classList[1];
    // end of function variables
    choices.toArray;
    // remove event target
    choice.removeEventListener('click', respondToTheClick);
    // add first selection to opencards array
    openCards.push(choices);
    console.log("first card added");
    console.log(openCards);
    // perform check function
  check(cards);
  }
}

function check(event) {
  // variables for new openCards array
  let firstChoice = openCards[0];
  let secondChoice = openCards[1];
  // if cards match
  if(openCards.length % 2 === 0 && firstChoice === secondChoice){
      match();
      console.log("if match called");
      console.log(openCards);
    }
    // if cards dont match
  if(openCards.length % 2 === 0 && firstChoice != secondChoice){
      noMatch();
      console.log("if no match called");
      console.log(openCards);
    }
}

function hold(){
// adds to hold array
}
function match(){
  // perform match animation
  console.log("match called");
  console.log(openCards);
}
function noMatch(){
  // perform incorrect animation
  console.log("noMatch called");
  console.log(openCards);
}


/* set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you
  call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in
 another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call
 from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function
 that you call from this one)
 */
