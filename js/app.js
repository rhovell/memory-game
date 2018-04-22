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
// expert level arrays
var sealifeCards = ['clownfish', 'clownfish', 'dolphin', 'dolphin', 'hermit-crab', 'hermit-crab', 'killer-whale', 'killer-whale', 'octopus', 'octopus',
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

const levelFour = document.getElementById('expertButton');
const levelFourThemes = document.getElementsByClassName('expert');
const levelFourChoices = document.querySelector('.expertThemeSelection');

const levelButton = document.querySelector(".button");
const levelSelects = document.querySelector('#levelContent');
const themeSelects = document.querySelector('#themeContent');
const levelSelection = document.querySelector('.level');
// theme variables
const themeSelectionOne = document.querySelector('.selectPack.one');
const themeSelectionTwo = document.querySelector('.selectPack.two');
const themeSelectionThree = document.querySelector('.selectPack.three');
const themeSelectionFour = document.querySelector('.selectPack.four');

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
  const body = document.querySelector("body");
  if (e.target.classList.contains('easy')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('easyThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "grid";
    levelMode.push(choices);
    body.classList.add("easy");
}
  if (e.target.classList.contains('medium')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('mediumThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "grid";
    levelMode.push(choices);
    body.classList.add("medium");
}
  if (e.target.classList.contains('hard')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('hardThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "grid";
    levelMode.push(choices);
    body.classList.add("hard");
}
  if (e.target.classList.contains('expert')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('expertThemeSelection');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.lvlChoice');
    let choices = e.target.id;
    choosen.style.display = "grid";
    levelMode.push(choices);
    body.classList.add("expert");
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
    // console.log(levelMode);
}
  if (me.contains('farmyard')) {
    let choosen = document.getElementById('selectFarmyard');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.farmyard.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    // console.log(levelMode);
}
// medium themes
  if (me.contains('birds')) {
    let choosen = document.getElementById('selectBirds');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.birds.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    // console.log(levelMode);
}
  if (me.contains('bugs')) {
    let choosen = document.getElementById('selectBugs');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.bugs.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    // console.log(levelMode);
}
  if (me.contains('reptiles')) {
    let choosen = document.getElementById('selectReptiles');
    choosen.classList.add('lvlChoice');
    let choice = document.querySelector('.reptiles.lvlChoice');
    let choices = choice.id;
    // choosen.style.display = "block";
    levelMode.push(choices);
    // console.log(levelMode);
}
// hard themes
if (me.contains('dinosaurs')) {
  let choosen = document.getElementById('selectDinosaurs');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.dinosaurs.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  // console.log(levelMode);
}
if (me.contains('endangered')) {
  let choosen = document.getElementById('selectEndangered');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.endangered.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  // console.log(levelMode);
}
if (me.contains('woodland')) {
  let choosen = document.getElementById('selectWoodland');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.woodland.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  // console.log(levelMode);
}
// expert themeSelects
if (me.contains('sealife')) {
  let choosen = document.getElementById('selectSealife');
  choosen.classList.add('lvlChoice');
  let choice = document.querySelector('.sealife.lvlChoice');
  let choices = choice.id;
  // choosen.style.display = "block";
  levelMode.push(choices);
  // console.log(levelMode);
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
 document.addEventListener('DOMContentLoaded', function shuffle(array) {
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
container.classList = 'container';
// add container div to body
document.body.append(container);
// moves javascript link to bottom of body
$('#js').insertAfter(container);
// create deck ul list
const dealtCards = document.createElement('ul');
dealtCards.classList = 'deck';

function respondToTheClick() {
};
// shuffle cards
cardList = shuffle(cards);
// add cards to deck
container.appendChild(dealtCards);
// add card elements and class details
for (let i = 0; i < cards.length; i++) {
  const placedCard = document.createElement('li');
  placedCard.classList = 'card';
  const cardDetails = document.createElement('i');
  cardDetails.classList = 'fa ' + cardList[i];
  dealtCards.appendChild(placedCard);
  placedCard.appendChild(cardDetails);
}
// add event listener to all cards
dealtCards.addEventListener('click', respondToTheClick);

/* set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
