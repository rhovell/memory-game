/*
 * card holding arrays
 */
var cards = [];
var cardsOriginal = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle',
'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
var openCards = [];
var matchedCards = [];
var starRatings = ['fa fa-star', 'fa fa-star', 'fa fa-star'];
let levelMode = [];

// easy level arrays
var butterflyCards = ['blue', 'blue', 'red', 'red', 'orange', 'orange', 'yellow', 'yellow'];
var farmyardCards = ['chicken', 'chicken', 'cow', 'cow', 'pig', 'pig', 'sheep', 'sheep'];
// medium level arrays
var birdCards = ['humming-bird', 'humming-bird', 'kiwi', 'kiwi', 'ostrich', 'ostrich', 'parrot',
'parrot', 'penguin', 'penguin', 'tucan', 'tucan'];
var bugCards = ['bee', 'bee', 'beetle', 'beetle', 'cricket', 'cricket', 'dragonfly', 'dragonfly',
'ladybird', 'ladybird', 'snail', 'snail'];
var reptileCards = ['chameleon', 'chameleon', 'cobra', 'cobra', 'frog', 'frog', 'lizard', 'lizard',
'newt', 'newt', 'turtle', 'turtle'];
// hard level arrays
var dinosaurCards = ['ankylosaurus', 'ankylosaurus', 'corythosaurus', 'corythosaurus', 'diplodocos', 'diplodocos', 'parasaurolophus', 'parasaurolophus',
'pterodactyl', 'pterodactyl', 'stegosaurus', 'stegosaurus', 'triceratops', 'triceratops', 'velociraptor', 'velociraptor'];
var endangeredCards = ['baboon', 'baboon', 'bear', 'bear', 'elephant', 'elephant', 'hyena', 'hyena',
'lion', 'lion', 'panda', 'panda', 'platypus', 'platypus', 'polar-bear', 'polar-bear'];
var woodlandCards = ['badger', 'badger', 'deer', 'deer', 'fox', 'fox', 'hedgehog', 'hedgehog',
'mouse', 'mouse', 'owl', 'owl', 'rabbit', 'rabbit', 'squirrel', 'squirrel'];
// difficult level arrays
var sealifeCards = ['clownfish', 'clownfish', 'dolphin', 'doplin', 'hermit-crab', 'hermit-crab', 'killer-whale', 'killer-whale', 'octopus', 'octopus',
 'puffafish', 'puffafish', 'shark', 'shark', 'squid', 'squid', 'starfish', 'starfish', 'whale', 'whale']
// level variables
const levelOne = document.getElementById('easyButton');
const levelOneThemes = document.getElementsByClassName('easy');
const levelOneChoices = document.querySelector('.easyThemeSelection');

const levelTwo = document.getElementById('mediumButton');
const levelTwoThemes = document.getElementsByClassName('medium');
const levelTwoChoices = document.querySelector('.mediumThemeSelection');

const levelThree = document.getElementById('hardButton');
const levelThreeThemes = document.getElementsByClassName('hard');
const levelThreeChoices = document.querySelector('.hardThemeSelection');

const levelFour = document.getElementById('difficultButton');
const levelFourThemes = document.getElementsByClassName('difficult');
const levelFourChoices = document.querySelector('.difficultThemeSelection');

const levelButton = document.querySelector(".button");
const levelSelects = document.querySelector('#levelContent');
const themeSelects = document.querySelector('#themeContent');
const levelSelection = document.querySelector('.level');
// theme variables
const themeSelectionOne = document.querySelector('.selectPack.one');
const themeSelectionTwo = document.querySelector('.selectPack.two');
const themeSelectionThree = document.querySelector('.selectPack.three');
const themeSelectionFour = document.querySelector('.selectPack.four');
// themeSelectionOne.addEventListener("click", switchDecks);
// themeSelectionTwo.addEventListener("click", switchDecks);
// themeSelectionThree.addEventListener("click", switchDecks);
// themeSelectionFour.addEventListener("click", switchDecks);
// console.log(themeSelection)
levelOne.addEventListener("click", levelSelectionChange);
levelTwo.addEventListener("click", levelSelectionChange);
levelThree.addEventListener("click", levelSelectionChange);
levelFour.addEventListener("click", levelSelectionChange);
// Intro and level select Modal
// document on load show modal, with level selection buttons
// buttons lead to theme selection window
const levelModal = document.getElementById("levelModal");
const levelSelections = document.querySelector('.level');
// theme select starts Game
function introPopup(){
document.onload = levelModal.style.display = "block";
}
introPopup();

function levelSelectionChange(e){
  if (e.target.classList.contains('easy')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('easyThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "block";
    levelMode.push(choices);
}
  if (e.target.classList.contains('medium')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('mediumThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "block";
    levelMode.push(choices);
}
  if (e.target.classList.contains('hard')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('hardThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "block";
    levelMode.push(choices);
}
  if (e.target.classList.contains('difficult')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('difficultThemeSelection');
    choosen.classList.add('lvlChoice');

    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "block";
    levelMode.push(choices);
}
}


function switchDecks(e){
  let me = event.target.classList;
  // console.log(event.target);
  // console.log("switchDecks called");
  // easy themes
  if (me.contains('butterflies')) {
    let choosen = document.getElementById('selectButterflies');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.butterflies.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    console.log(levelMode);
}
  if (me.contains('farmyard')) {
    let choosen = document.getElementById('selectFarmyard');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.farmyard.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    console.log(levelMode);
}
// medium themes
  if (me.contains('birds')) {
    let choosen = document.getElementById('selectBirds');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.birds.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    console.log(levelMode);
}
  if (me.contains('bugs')) {
    let choosen = document.getElementById('selectBugs');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.bugs.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    console.log(levelMode);
}
  if (me.contains('reptiles')) {
    let choosen = document.getElementById('selectReptiles');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.reptiles.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    console.log(levelMode);
}
// hard themes
if (me.contains('dinosaurs')) {
  let choosen = document.getElementById('selectDinosaurs');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.dinosaurs.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  console.log(levelMode);
}
if (me.contains('endangered')) {
  let choosen = document.getElementById('selectEndangered');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.endangered.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  console.log(levelMode);
}
if (me.contains('woodland')) {
  let choosen = document.getElementById('selectWoodland');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.woodland.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  console.log(levelMode);
}
// difficult themeSelects
if (me.contains('sealife')) {
  let choosen = document.getElementById('selectSealife');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.sealife.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  console.log(levelMode);
}
  levelModal.style.display = "none";
  dealCards();
}
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
createContainer();
createStars();
createMovecounter();
createRestartButton();
// moves javascript link to bottom of body
const body = document.querySelector("body");
$('#js').insertAfter(body);

// create container div
function createContainer(){
  const container = document.createElement('div');
  container.classList = 'container';
  const headingContainer = document.createElement('div');
  headingContainer.classList = "heading"
  const heading = document.createElement("header");
  // heading.classList = "heading";
container.appendChild(headingContainer);
// add container div to body
headingContainer.appendChild(heading);
}
function createStars(){
  const scores = document.createElement('section');
  const starRating = document.createElement('ul');
  const container = document.querySelector(".container");
  const headingContainer = document.querySelector(".heading");
headingContainer.appendChild(scores);
scores.classList = 'score-panel';
starRating.classList = 'stars';
for(var i = 0; i < starRatings.length; i++){
const starList = document.createElement('li');
starRating.appendChild(starList);
const stars = document.createElement('I');
starList.appendChild(stars);
stars.classList = 'fa fa-star';
scores.appendChild(starRating);
}
}

function createMovecounter(){
  const scores = document.querySelector(".score-panel");
const moveCounter = document.createElement('span');
scores.appendChild(moveCounter);
// console.log("add span element");
moveCounter.classList = 'moves';
// console.log("add class moves");
moveCounter.textContent = "0";
// console.log("add textContent");
// console.log("add m")
const moveText = document.createElement('span');
moveText.textContent = " Moves";
scores.appendChild(moveText);
}
function createRestartButton(){
  const scores = document.querySelector(".score-panel");
const restartButton = document.createElement('div');
scores.appendChild(restartButton);
restartButton.classList = 'restart';
const restart = document.createElement('I');
restart.classList = 'fa fa-repeat';
restartButton.appendChild(restart);
restartButton.addEventListener("click", restartGame);
}
function restartGame(){
  // call to restart game - forces page reload
  console.log("restart game called")
  location.reload(true);
}
// console.log("js moved");
// create deck ul list
function dealCards(){
  console.log("dealCards called");
  const dealtCards = document.createElement('ul');
  const container = document.querySelector(".container");

  dealtCards.classList = 'deck';
  // add cards to deck
  container.appendChild(dealtCards);
  // easy themes
  let butterflySelector = "selectButterflies";
  let farmyardSelector = "selectFarmyard";
  // medium themes
  let birdSelector = "selectBirds";
  let bugSelector = "selectBugs";
  let reptileSelector = "selectReptiles";
  // hard themes
  let dionsaurSelector = "selectDinosaurs";
  let endangeredSelector = "selectEndangered";
  let woodlandSelector = "selectWoodland";
  // difficult themes
  let sealifeSelector = "selectSealife";

  // shuffle cards for chosen deck
  // easy themes
for(var i = 0; i < levelMode.length; i++){
  if(levelMode[i] === butterflySelector){
    let cards = butterflyCards;
    console.log(cards);
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
    const deck = document.querySelector(".deck");
    deck.classList.add("easy");
  deck.classList.add("butterflies");
  body.classList.add("butterflies");
  }
  if(levelMode[i] === farmyardSelector){
    let cards = farmyardCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
  deck.classList.add("easy");
deck.classList.add("farmyard");
body.classList.add("farmyard");
  }
// medium themes
  if(levelMode[i] === birdSelector){
    let cards = birdCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
  deck.classList.add("medium");
deck.classList.add("birds");
body.classList.add("birds");
}
  if(levelMode[i] === bugSelector){
    let cards = bugCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("medium");
deck.classList.add("bugs");
body.classList.add("bugs");
}
  if(levelMode[i] === reptileSelector){
    let cards = reptileCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("medium");
deck.classList.add("reptiles");
body.classList.add("reptiles");
}
// hard themes
  if(levelMode[i] === dionsaurSelector){
    let cards = dinosaurCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("hard");
deck.classList.add("dinosaur");
body.classList.add("dinosaurs");

}
  if(levelMode[i] === endangeredSelector){
    let cards = endangeredCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("hard");
deck.classList.add("endangered");
body.classList.add("endangered");

}
  if(levelMode[i] === woodlandSelector){
    let cards = woodlandCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("hard");
deck.classList.add("woodland");
body.classList.add("woodland");

}
// difficult themes
  if(levelMode[i] === sealifeSelector){
    let cards = sealifeCards;
    console.log(cards);
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
  const deck = document.querySelector(".deck");
deck.classList.add("difficult");
deck.classList.add("sealife");
body.classList.add("sealife");

}
}
    dealtCards.addEventListener('click', respondToTheClick);
  }
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
    moveCount();
    rating();
    if(matchedCards.length === 16){
      win();
    }
  }
}

/* check process explanation
- check openCards array items for matching values
- if so call match() function
- if not after 1.01 seconds add wrong class to card
- wrong class calls css animation
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
console.log("openCards array = " + openCards);
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
console.log("matchedCards array = " + matchedCards);
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

let moveCounter = document.querySelector('.moves');
let moves = moveCounter.innerText;
function moveCount(){
  console.log("moveCount function called")
  console.log(moves);
  moves++;
  moveCounter.innerText = moves;
}

function rating(){
  let stars = $(".stars .fa");
  let halfStars = $(".stars .far")
  if(moves === 18){
    stars[2].classList = "fa fa-star-half";
  }
  if(moves === 22){
    stars[2].classList = "far fa-star";
  }
  if(moves === 26){
    stars[1].classList = "fa fa-star-half";
  }
  if(moves === 30){
    stars[1].classList = "far fa-star";
  }
  if(moves === 34){
    stars[0].classList = "fa fa-star-half";
  }
  if(moves === 38){
    stars[0].classList = "far fa-star";
  }
}

function win(){
    console.log("win animation called");
    // add pop up window with you win and restart options
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
