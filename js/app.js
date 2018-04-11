/*
 * card holding arrays
 */
var cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle',
'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
var openCards = [];
var matchedCards = [];
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
/* Process explanation
+ div class = "container" element
- move javascript link to bottom of body
+ ul class = "deck" element
- shuffle cards array
+ li class = "card" elements
+ i class = cardList array items
+ addEventListener to li elements*/

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

/* respondToTheClick process explanation
- target li elements only
+ add open and show classes to selected card
- removeEventListener from selected card
+ add selected I element class[1] to openCards array
- call check() function*/

// function to call all other functions when card is clicked
function respondToTheClick(e) {
// console.log("card selected");
// console.log("check if the target that is clicked is the li");
// check if the target that is clicked is the li
  if (e.target.tagName === 'LI') {
// toggles open and show class
// console.log("toggles open and show class");
    e.target.classList.add('open','show');
// fucntion variables
    let choice = document.querySelector('.card.open.show');
    let choices = e.target.firstChild.classList[1];
// end of function variables
    choices.toArray;
// remove event target
// console.log("remove event target");
    choice.removeEventListener('click', respondToTheClick);
// add first selection to opencards array
    openCards.push(choices);
// console.log("card added to openCards array");
// console.log("openCards array = " + openCards);
// perform check function
    check(cards);
  }
}

/* check process explanation
- check openCards array items for matching values
- if so call match() function
- if not after 1.01 seconds add wrong class to card
+ call clear() function*/

function check(event) {
// variables for new openCards array
  let firstChoice = openCards[0];
  let secondChoice = openCards[1];
// if cards match
  if(openCards.length % 2 === 0 && firstChoice === secondChoice){
// console.log("perform check function if openCards is divisible by 2");
      match();
// console.log("if match called");
// console.log("openCards array = " + openCards);
  }
    // if cards dont match
  if(openCards.length % 2 === 0 && firstChoice != secondChoice){
// console.log("if no match called");
// noMatch function
    notAMatch = setTimeout(function noMatch(){
// console.log("noMatch called");
    let selects = $(".open.show");
    selects.addClass("wrong");
// console.log("wrong class added");
// console.log("openCards array = " + openCards);
    clear();
    },1001);
  }
}
/* match process explanation
- remove open.show classes
+ add match.hold classes
+ match class performs css animation
- removeEventListener from matched cards
- for every item in the openCards array, add I class[1] to matchedCards array
- after 3 seconds remove match class
- empty openCards array*/

// match function
function match(){
// console.log("match called");
  let openSelects = $(".open.show");
  openSelects.removeClass("open show");
  openSelects.addClass("match hold");
  // openSelects.addClass("hold");
console.log("remove open show classes and add match");
console.log("openCards array = " + openCards + " matchedCards array = " + matchedCards);
  let match = document.querySelector(".card.match");
  let matches = match.firstChild.classList[1];
  matches.toArray;
  match.removeEventListener('click', respondToTheClick);
console.log("removeEventListener from matched cards");
console.log("clear open cards array")
for(let i = 0; i < openCards.length; i++){
  matchedCards.push(matches);
}
holdCard = setTimeout(function (){
  $(".card.match").removeClass("match");
},3000);
// $(".card.match").addClass("hold");
openCards.splice(0, 2);

console.log(matchedCards);
}

/* clear process explanation
- after 0.001 seconds remove open.show classes
- after 2.1 seconds remove wrong class
+ empty openCards array*/

// wrong choice function
function clear(){
// console.log("open.show class removed");
  clearOpen = setTimeout(function(){
    let openSelects = $(".open.show");
    openSelects.removeClass("open show");
  },100);
// console.log("clear function called with timeout")
  myVar = setTimeout(function clearWrong(){
// console.log("clearWrong function called");
    let selects = $(".card.wrong");
    selects.removeClass("wrong");
// console.log("wrong class removed");
    openCards.splice(0, 2);
// console.log("openCards emptied");
// console.log("openCards array = " + openCards);
  }, 2010);
}

function win(){
  if(matchedCards.length === 16){
    console.log("win animation called");
    winAnimation();
  }
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
