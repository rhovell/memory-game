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
const deck = document.querySelector(".deck");
function createContainer(){
  const body = document.querySelector("body");
  const bodyNameLevel = body.classList[0];
  const container = document.createElement('div');
  container.classList = 'container';
  body.insertBefore(container, levelModal);
  // console.log("container built");
  const headingContainer = document.createElement('div');
  headingContainer.classList = "heading"
  const heading = document.createElement("header");
  heading.innerText = "Matching Game";
  const levelLog = document.createElement("SPAN");
  // console.log(body.classList);
  levelLog.innerText = "Difficulty: " + bodyNameLevel;
  container.appendChild(headingContainer);
  // add container div to body
  headingContainer.appendChild(heading);
  headingContainer.appendChild(levelLog);
  // console.log("header added");
}
function createStars(){
  const scores = document.createElement('section');
  const starRating = document.createElement('ul');
  const container = document.querySelector(".container");
  const headingContainer = document.querySelector(".heading");
  headingContainer.appendChild(scores);
  scores.classList = 'score-panel';
  starRating.classList = 'stars';
  starRating.id = "starId";
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
  // console.log("restart game called")
  location.reload(true);
}
// create deck ul list
function dealCards(){
  createContainer();
  createStars();
  createMovecounter();
  createRestartButton();
  // moves javascript link to bottom of body
  const body = document.querySelector("body");
  $('#js').insertAfter(body);
  const dealtCards = document.createElement('ul');
  dealtCards.classList = 'deck';
  const container = document.querySelector(".container");
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
  let dinosaurSelector = "selectDinosaurs";
  let endangeredSelector = "selectEndangered";
  let woodlandSelector = "selectWoodland";
  // expert themes
  let sealifeSelector = "selectSealife";
  // call to shuffle cards for chosen deck
  // for statement for ALL decks
for(var i = 0; i < levelMode.length; i++){
  // check which deck has been selected, switch decks
  // easy decks
  if(levelMode[i] === butterflySelector){
    let cards = butterflyCards;
    cardList = shuffle(cards);
    let placedCard;
    let cardDetails;
    // place li card elements
  for (var i = 0; i < cards.length; i++) {
    let placedCard = document.createElement('li');
    placedCard.classList = 'card';
    dealtCards.appendChild(placedCard);
    // place card image details
    let cardDetails = document.createElement('IMG');
    cardDetails.classList = "fa cardSymbols butterfly-" + cardList[i];
    cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
    cardDetails.src;
    cardDetails.toArray;
    // place image source dependant on card class
    let redSelect = "butterfly-red";
    let blueSelect = "butterfly-blue";
    let yellowSelect = "butterfly-yellow";
    let orangeSelect = "butterfly-orange";
      if(cardDetails.classList[2] === redSelect){
        cardDetails.src = 'img/game-sets/easy/butterflies/red.png';
      }
      if(cardDetails.classList[2] === blueSelect){
        cardDetails.src = 'img/game-sets/easy/butterflies/blue.png';
      }
      if(cardDetails.classList[2] === yellowSelect){
        cardDetails.src = 'img/game-sets/easy/butterflies/yellow.png';
      }
      if(cardDetails.classList[2] === orangeSelect){
        cardDetails.src = 'img/game-sets/easy/butterflies/orange.png';
      }
    placedCard.appendChild(cardDetails);
    // console.log("cardDetails IMG element placed");
  }
  // add level details to deck and body
    const deck = document.querySelector(".deck");
    deck.classList.add("easy");
    deck.classList.add("butterflies");
    body.classList.add("butterflies");
    // end of butterfly deck
  }
  // farmyard deck
  if(levelMode[i] === farmyardSelector){
    let cards = farmyardCards;
    cardList = shuffle(cards);
    let placedCard;
    let cardDetails;
    // place li card elements
  for (var i = 0; i < cards.length; i++) {
    let placedCard = document.createElement('li');
    placedCard.classList = 'card';
    dealtCards.appendChild(placedCard);
    // place card image details
    let cardDetails = document.createElement('IMG');
    cardDetails.classList = "fa cardSymbols farmyard-" + cardList[i];
    cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
    cardDetails.src;
    cardDetails.toArray;
    // place image source dependant on card class
    let chickenSelect = "farmyard-chicken";
    let cowSelect = "farmyard-cow";
    let pigSelect = "farmyard-pig";
    let sheepSelect = "farmyard-sheep";
      if(cardDetails.classList[2] === chickenSelect){
        cardDetails.src = 'img/game-sets/easy/farmyard/chicken.png';
      }
      if(cardDetails.classList[2] === cowSelect){
        cardDetails.src = 'img/game-sets/easy/farmyard/cow.png';
      }
      if(cardDetails.classList[2] === pigSelect){
        cardDetails.src = 'img/game-sets/easy/farmyard/pig.png';
      }
      if(cardDetails.classList[2] === sheepSelect){
        cardDetails.src = 'img/game-sets/easy/farmyard/sheep.png';
      }
      placedCard.appendChild(cardDetails);
      // console.log("cardDetails IMG element placed");
    }
    // add level details to deck and body
      const deck = document.querySelector(".deck");
      deck.classList.add("easy");
      deck.classList.add("farmyard");
      body.classList.add("farmyard");
      // end of butterfly deck
    }
    // end of easy themes
    // medium decks
  if(levelMode[i] === birdSelector){
    let cards = birdCards;
    cardList = shuffle(cards);
    let placedCard;
    let cardDetails;
    // place li card elements
  for (var i = 0; i < cards.length; i++) {
    let placedCard = document.createElement('li');
    placedCard.classList = 'card';
    dealtCards.appendChild(placedCard);
    // place card image details
    let cardDetails = document.createElement('IMG');
    cardDetails.classList = "fa cardSymbols birds-" + cardList[i];
    cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
    cardDetails.src;
    cardDetails.toArray;
    // place image source dependant on card class
    let hummSelect = "birds-humming-bird";
    let kiwiSelect = "birds-kiwi";
    let ostrichSelect = "birds-ostrich";
    let parrotSelect = "birds-parrot";
    let penguinSelect = "birds-penguin";
    let tucanSelect = "birds-tucan";
      if(cardDetails.classList[2] === hummSelect){
        cardDetails.src = 'img/game-sets/medium/birds/humming-bird.png';
      }
      if(cardDetails.classList[2] === kiwiSelect){
        cardDetails.src = 'img/game-sets/medium/birds/kiwi.png';
      }
      if(cardDetails.classList[2] === ostrichSelect){
        cardDetails.src = 'img/game-sets/medium/birds/ostrich.png';
      }
      if(cardDetails.classList[2] === parrotSelect){
        cardDetails.src = 'img/game-sets/medium/birds/parrot.png';
      }
      if(cardDetails.classList[2] === penguinSelect){
        cardDetails.src = 'img/game-sets/medium/birds/penguin.png';
      }
      if(cardDetails.classList[2] === tucanSelect){
        cardDetails.src = 'img/game-sets/medium/birds/tucan.png';
      }
      placedCard.appendChild(cardDetails);
      // console.log("cardDetails IMG element placed");
    }
    // add level details to deck and body
      const deck = document.querySelector(".deck");
      deck.classList.add("medium");
      deck.classList.add("birds");
      body.classList.add("birds");
      // end of butterfly deck
    }
// end of birds themes
// bug themes
  if(levelMode[i] === bugSelector){
    let cards = bugCards;
    cardList = shuffle(cards);
    let placedCard;
    let cardDetails;
    // place li card elements
  for (var i = 0; i < cards.length; i++) {
    let placedCard = document.createElement('li');
    placedCard.classList = 'card';
    dealtCards.appendChild(placedCard);
    // place card image details
    let cardDetails = document.createElement('IMG');
    cardDetails.classList = "fa cardSymbols bugs-" + cardList[i];
    cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
    cardDetails.src;
    cardDetails.toArray;
    // place image source dependant on card class
    let beeSelect = "bugs-bee";
    let beetleSelect = "bugs-beetle";
    let cricketSelect = "bugs-cricket";
    let dragonflySelect = "bugs-dragonfly";
    let ladybirdSelect = "bugs-ladybird";
    let snailSelect = "bugs-snail";
      if(cardDetails.classList[2] === beeSelect){
        cardDetails.src = 'img/game-sets/medium/bugs/bee.png';
      }
      if(cardDetails.classList[2] === beetleSelect){
        cardDetails.src = 'img/game-sets/medium/bugs/beetle.png';
      }
      if(cardDetails.classList[2] === cricketSelect){
        cardDetails.src = 'img/game-sets/medium/bugs/cricket.png';
      }
      if(cardDetails.classList[2] === dragonflySelect){
        cardDetails.src = 'img/game-sets/medium/bugs/dragonfly.png';
      }
      if(cardDetails.classList[2] === ladybirdSelect){
        cardDetails.src = 'img/game-sets/medium/bugs/ladybird.png';
      }
      if(cardDetails.classList[2] === snailSelect){
        cardDetails.src = 'img/game-sets/medium/bugs/snail.png';
      }
      placedCard.appendChild(cardDetails);
      // console.log("cardDetails IMG element placed");
    }
    // add level details to deck and body
      const deck = document.querySelector(".deck");
      deck.classList.add("medium");
      deck.classList.add("bugs");
      body.classList.add("bugs");
      console.log(levelMode);
      // end of bugs deck
    }

  if(levelMode[i] === reptileSelector){
    let cards = reptileCards;
    cardList = shuffle(cards);
    let placedCard;
    let cardDetails;
    // place li card elements
  for (var i = 0; i < cards.length; i++) {
    let placedCard = document.createElement('li');
    placedCard.classList = 'card';
    dealtCards.appendChild(placedCard);
    // place card image details
    let cardDetails = document.createElement('IMG');
    cardDetails.classList = "fa cardSymbols reptile-" + cardList[i];
    cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
    cardDetails.src;
    cardDetails.toArray;
    // place image source dependant on card class
    let chamSelect = "reptile-chameleon";
    let cobraSelect = "reptile-cobra";
    let frogSelect = "reptile-frog";
    let lizardSelect = "reptile-lizard";
    let newtSelect = "reptile-newt";
    let turtleSelect = "reptile-turtle";
      if(cardDetails.classList[2] === chamSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/chameleon.png';
      }
      if(cardDetails.classList[2] === cobraSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/cobra.png';
      }
      if(cardDetails.classList[2] === frogSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/frog.png';
      }
      if(cardDetails.classList[2] === lizardSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/lizard.png';
      }
      if(cardDetails.classList[2] === newtSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/newt.png';
      }
      if(cardDetails.classList[2] === turtleSelect){
        cardDetails.src = 'img/game-sets/medium/reptiles/turtle.png';
      }
      placedCard.appendChild(cardDetails);
      // console.log("cardDetails IMG element placed");
    }
    // add level details to deck and body
      const deck = document.querySelector(".deck");
      deck.classList.add("medium");
      deck.classList.add("reptiles");
      body.classList.add("reptiles");
      // end of reptiles deck
    }
    // hard themes
    // dinosaur deck
    if(levelMode[i] === dinosaurSelector){
      let cards = dinosaurCards;
      cardList = shuffle(cards);
      let placedCard;
      let cardDetails;
      // place li card elements
    for (var i = 0; i < cards.length; i++) {
      let placedCard = document.createElement('li');
      placedCard.classList = 'card';
      dealtCards.appendChild(placedCard);
      // place card image details
      let cardDetails = document.createElement('IMG');
      cardDetails.classList = "fa cardSymbols dinosaur-" + cardList[i];
      cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
      cardDetails.src;
      cardDetails.toArray;
      // place image source dependant on card class
      let ankSelect = "dinosaur-ankylosaurus";
      let corySelect = "dinosaur-corythosaurus";
      let diplSelect = "dinosaur-diplodocos";
      let paraSelect = "dinosaur-parasaurolophus";
      let pteSelect = "dinosaur-pterodactyl";
      let stegSelect = "dinosaur-stegosaurus";
      let triSelect = "dinosaur-triceratops";
      let veloSelect = "dinosaur-velociraptor";
        if(cardDetails.classList[2] === ankSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/ankylosaurus.png';
        }
        if(cardDetails.classList[2] === corySelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/corythosaurus.png';
        }
        if(cardDetails.classList[2] === diplSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/diplodocos.png';
        }
        if(cardDetails.classList[2] === paraSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/parasaurolophus.png';
        }
        if(cardDetails.classList[2] === pteSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/pterodactyl.png';
        }
        if(cardDetails.classList[2] === stegSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/stegosaurus.png';
        }
        if(cardDetails.classList[2] === triSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/triceratops.png';
        }
        if(cardDetails.classList[2] === veloSelect){
          cardDetails.src = 'img/game-sets/hard/dinosaurs/velociraptor.png';
        }
        placedCard.appendChild(cardDetails);
        // console.log("cardDetails IMG element placed");
      }
      // add level details to deck and body
        const deck = document.querySelector(".deck");
        deck.classList.add("hard");
        deck.classList.add("dinosaurs");
        body.classList.add("dinosaurs");
        // end of dinosaur deck
      }
      // endangered decks
      if(levelMode[i] === endangeredSelector){
        let cards = endangeredCards;
        cardList = shuffle(cards);
        let placedCard;
        let cardDetails;
        // place li card elements
      for (var i = 0; i < cards.length; i++) {
        let placedCard = document.createElement('li');
        placedCard.classList = 'card';
        dealtCards.appendChild(placedCard);
        // place card image details
        let cardDetails = document.createElement('IMG');
        cardDetails.classList = "fa cardSymbols endangered-" + cardList[i];
        cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
        cardDetails.src;
        cardDetails.toArray;
        // place image source dependant on card class
        let babSelect = "endangered-baboon";
        let bearSelect = "endangered-bear";
        let eleSelect = "endangered-elephant";
        let hyenaSelect = "endangered-hyena";
        let lionSelect = "endangered-lion";
        let pandaSelect = "endangered-panda";
        let platSelect = "endangered-platypus";
        let polaSelect = "endangered-polar-bear";
          if(cardDetails.classList[2] === babSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/baboon.png';
          }
          if(cardDetails.classList[2] === bearSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/bear.png';
          }
          if(cardDetails.classList[2] === eleSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/elephant.png';
          }
          if(cardDetails.classList[2] === hyenaSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/hyena.png';
          }
          if(cardDetails.classList[2] === lionSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/lion.png';
          }
          if(cardDetails.classList[2] === pandaSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/panda.png';
          }
          if(cardDetails.classList[2] === platSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/platypus.png';
          }
          if(cardDetails.classList[2] === polaSelect){
            cardDetails.src = 'img/game-sets/hard/endangered/polar-bear.png';
          }
          placedCard.appendChild(cardDetails);
          // console.log("cardDetails IMG element placed");
        }
        // add level details to deck and body
          const deck = document.querySelector(".deck");
          deck.classList.add("hard");
          deck.classList.add("endangered");
          body.classList.add("endangered");
          // end of endangered deck
        }
        // woodland decks
        if(levelMode[i] === woodlandSelector){
          let cards = woodlandCards;
          cardList = shuffle(cards);
          let placedCard;
          let cardDetails;
          // place li card elements
        for (var i = 0; i < cards.length; i++) {
          let placedCard = document.createElement('li');
          placedCard.classList = 'card';
          dealtCards.appendChild(placedCard);
          // place card image details
          let cardDetails = document.createElement('IMG');
          cardDetails.classList = "fa cardSymbols woodland-" + cardList[i];
          cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
          cardDetails.src;
          cardDetails.toArray;
          // place image source dependant on card class
          let badgerSelect = "woodland-badger";
          let deerSelect = "woodland-deer";
          let foxSelect = "woodland-fox";
          let hedgehogSelect = "woodland-hedgehog";
          let mouseSelect = "woodland-mouse";
          let owlSelect = "woodland-owl";
          let rabbitSelect = "woodland-rabbit";
          let squirrelSelect = "woodland-squirrel";
            if(cardDetails.classList[2] === badgerSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/badger.png';
            }
            if(cardDetails.classList[2] === deerSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/deer.png';
            }
            if(cardDetails.classList[2] === foxSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/fox.png';
            }
            if(cardDetails.classList[2] === hedgehogSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/hedgehog.png';
            }
            if(cardDetails.classList[2] === mouseSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/mouse.png';
            }
            if(cardDetails.classList[2] === owlSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/owl.png';
            }
            if(cardDetails.classList[2] === rabbitSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/rabbit.png';
            }
            if(cardDetails.classList[2] === squirrelSelect){
              cardDetails.src = 'img/game-sets/hard/woodland/squirrel.png';
            }
            placedCard.appendChild(cardDetails);
            // console.log("cardDetails IMG element placed");
          }
          // add level details to deck and body
            const deck = document.querySelector(".deck");
            deck.classList.add("hard");
            deck.classList.add("woodland");
            body.classList.add("woodland");
            // end of endangered deck
          }
          // sealife decks
          if(levelMode[i] === sealifeSelector){
            let cards = sealifeCards;
            cardList = shuffle(cards);
            let placedCard;
            let cardDetails;
            // place li card elements
          for (var i = 0; i < cards.length; i++) {
            let placedCard = document.createElement('li');
            placedCard.classList = 'card';
            dealtCards.appendChild(placedCard);
            // place card image details
            let cardDetails = document.createElement('IMG');
            cardDetails.classList = "fa cardSymbols sealife-" + cardList[i];
            cardDetails.id = cardList[i] + "-" + cardList.indexOf(cardList[i]);
            cardDetails.src;
            cardDetails.toArray;
            // place image source dependant on card class
            let clownSelect = "sealife-clownfish";
            let dolphinSelect = "sealife-dolphin";
            let hermitSelect = "sealife-hermit-crab";
            let kwhaleSelect = "sealife-killer-whale";
            let octopusSelect = "sealife-octopus";
            let puffaSelect = "sealife-puffafish";
            let sharkSelect = "sealife-shark";
            let squidSelect = "sealife-squid";
            let stfishSelect = "sealife-starfish";
            let whaleSelect = "sealife-whale";
              if(cardDetails.classList[2] === clownSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/clownfish.png';
              }
              if(cardDetails.classList[2] === dolphinSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/dolphin.png';
              }
              if(cardDetails.classList[2] === hermitSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/hermit-crab.png';
              }
              if(cardDetails.classList[2] === kwhaleSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/killer-whale.png';
              }
              if(cardDetails.classList[2] === octopusSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/octopus.png';
              }
              if(cardDetails.classList[2] === puffaSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/puffafish.png';
              }
              if(cardDetails.classList[2] === sharkSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/shark.png';
              }
              if(cardDetails.classList[2] === squidSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/squid.png';
              }
              if(cardDetails.classList[2] === stfishSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/starfish.png';
              }
              if(cardDetails.classList[2] === whaleSelect){
                cardDetails.src = 'img/game-sets/expert/sealife/whale.png';
              }
              placedCard.appendChild(cardDetails);
              // console.log("cardDetails IMG element placed");
            }
            // add level details to deck and body
              const deck = document.querySelector(".deck");
              deck.classList.add("expert");
              deck.classList.add("sealife");
              body.classList.add("sealife");
              // end of endangered deck
            }
    dealtCards.addEventListener('click', respondToTheClick);
    console.log(levelMode);

  }
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
// check if the target that is clicked is the li
if (openCards.length < 2){
  if (e.target.tagName === 'LI') {
    // console.log("check if the target that is clicked is the li");
// toggles open and show class
// console.log("toggles open and show class");
    e.target.classList.add('open','show');
// fucntion variables
    let choice = document.querySelector('.card.open');
    let choices = e.target.firstChild.classList[2];
    let choiceImage = $(".open.show").find(".cardSymbols");
    // let childI = document.getElementById('cardSymbols');
    // choiceImage.style.display = "block";
    // let image = choice.children['image'];
    // body > div.container > ul > li.card.open.show > i > div
// end of function variables
    choices.toArray;

// remove event target
// console.log("remove event target");
    e.target.removeEventListener('click', respondToTheClick);
// add first selection to opencards array
    openCards.push(choices);
// console.log("card added to openCards array");
// console.log("openCards array = " + openCards);
// perform check function
moveCount();
    check(cards);
    // rating();
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
// let deck = document.querySelector("body");
let easySelector = "easyI";
let mediumSelector = "mediumI";
let hardSelector = "hardI";
let expertSelector = "expertI";
let card = document.querySelector(".card");
// match function
function match(){
  let openSelects = $(".open.show");
  openSelects.removeClass("open show");
  openSelects.addClass("match hold");
  openSelects.addClass("hold");
  let match = document.querySelector(".card.match");
  let matches = match.firstChild.classList[2];
  matches.toArray;
  match.removeEventListener('click', respondToTheClick);
  for(let i = 0; i < openCards.length; i++){
    matchedCards.push(matches);
  }
holdCard = setTimeout(function (){
  $(".card.match").removeClass("match");
},3000);
openCards.splice(0, 2);
winCall();
}
 function winCall(){

   let winArray = matchedCards.length;
   let easySelector = "easyI";
   let mediumSelector = "mediumI";
   let hardSelector = "hardI";
   let expertSelector = "expertI";
   let card = document.querySelector(".card");
   // let cardList = cards.length;

     for(let i = 0; i < matchedCards.length; i++){
       if(levelMode[i] === easySelector){
         if(winArray === 8){
           win();
         }
       }
       if(levelMode[i] === mediumSelector){
         if(winArray === 12){
           win();
         }
       }
       if(levelMode[i] === hardSelector){
         if(winArray === 16){
           win();
         }
       }
       if(levelMode[i] === expertSelector){
         if(winArray === 20){
           win();
         }
       }
     }
 }
/* clear process explanation
- after 0.001 seconds remove open.show classes
- after 1 seconds remove wrong class
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
}, 1000);

}

function moveCount(){
  let easySelector = "easyI";
  let mediumSelector = "mediumI";
  let hardSelector = "hardI";
  let expertSelector = "expertI";
  let card = document.querySelector(".card");
  let moveCounter = document.querySelector('.moves');
  let moves = moveCounter.innerText;
  let starRatings = document.querySelector(".stars");
  let star = $(".stars").find("I");
  // let st = star.firstChild
  // console.log("moveCount function called")
  // console.log(moves);
  if(openCards.length === 2){
  moves++;
  moveCounter.innerText = moves;
}
  for(let i = 0; i < 100; i++){
  if(levelMode[i] === easySelector){
  if(moves === 7){
    star[2].classList = "fas fa-star-half";
  }
  if(moves === 8){
    star[2].classList = "far fa-star";
  }
  if(moves === 9){
    star[1].classList = "fas fa-star-half";
  }
  if(moves === 10){
    star[1].classList = "far fa-star";
  }
  if(moves === 11){
    star[0].classList = "fas fa-star-half";
  }
}
  if(levelMode[i] === mediumSelector){
  if(moves === 10){
    star[2].classList = "fas fa-star-half";
  }
  if(moves === 11){
    star[2].classList = "far fa-star";
  }
  if(moves === 12){
    star[1].classList = "fas fa-star-half";
  }
  if(moves === 13){
    star[1].classList = "far fa-star";
  }
  if(moves === 14){
    star[0].classList = "fas fa-star-half";
  }
}
  if(levelMode[i] === hardSelector){
  if(moves === 14){
    star[2].classList = "fas fa-star-half";
  }
  if(moves === 15){
    star[2].classList = "far fa-star";
  }
  if(moves === 16){
    star[1].classList = "fas fa-star-half";
  }
  if(moves === 17){
    star[1].classList = "far fa-star";
  }
  if(moves === 18){
    star[0].classList = "fas fa-star-half";
  }
}
  if(levelMode[i] === expertSelector){
  if(moves === 17){
    star[2].classList = "fas fa-star-half";
  }
  if(moves === 18){
    star[2].classList = "far fa-star";
  }
  if(moves === 19){
    star[1].classList = "fas fa-star-half";
  }
  if(moves === 20){
    star[1].classList = "far fa-star";
  }
  if(moves === 21){
    star[0].classList = "fas fa-star-half";
  }
}
}
}

function win(){
  let winModal = document.querySelector(".winModal");
  let congrats = document.querySelector(".congrats");
  let scoringPanel = document.querySelector(".winning-score");
  let scoringMoves = document.querySelector("#printMoves");
  let scoringStars = document.querySelector("#printStars");
  let winArray = matchedCards.length;
  let easySelector = "easyI";
  let mediumSelector = "mediumI";
  let hardSelector = "hardI";
  let expertSelector = "expertI";
  let card = document.querySelector(".card");
  // let moveCounter = document.querySelector('.moves');
  // let starCounter = document.querySelector('#starId').innerText;
    console.log("win animation called");
    congrats.classList.add("live");
    console.log("congrats live added");

    let moveCounter = document.querySelector('.moves');
    let moves = moveCounter.innerText;
    scoringMoves.innerText = moves;

    for(let i = 0; i < 100; i++){
    if(levelMode[i] === easySelector){
      let threeStar = 6;
      let twoHalfStar = 7;
      let twoStar = 8;
      let oneHalfStar = 9;
      let oneStar = 10;
      if(moves <= threeStar){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves === twoHalfStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves === twoStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves === oneHalfStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves === oneStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > oneStar){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }
    if(levelMode[i] === mediumSelector){
      let threeStar = 9;
      let twoHalfStar = 10;
      let twoStar = 11;
      let oneHalfStar = 12;
      let oneStar = 13;
      if(moves <= threeStar){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves === twoHalfStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves === twoStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves === oneHalfStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves === oneStar){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > oneStar){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }    if(levelMode[i] === hardSelector){
          let threeStar = 13;
          let twoHalfStar = 14;
          let twoStar = 15;
          let oneHalfStar = 16;
          let oneStar = 17;
          if(moves <= threeStar){
            scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
          }
          if(moves === twoHalfStar){
          scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
          }
          if(moves === twoStar){
          scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
          }
          if(moves === oneHalfStar){
          scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
          }
          if(moves === oneStar){
          scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
          }
          if(moves > oneStar){
          scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
          }
        }    if(levelMode[i] === expertSelector){
              let threeStar = 16;
              let twoHalfStar = 17;
              let twoStar = 18;
              let oneHalfStar = 19;
              let oneStar = 20;
              if(moves <= threeStar){
                scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
              }
              if(moves === twoHalfStar){
              scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
              }
              if(moves === twoStar){
              scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
              }
              if(moves === oneHalfStar){
              scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
              }
              if(moves === oneStar){
              scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
              }
              if(moves > oneStar){
              scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
              }
            }
  }
  congratAni = setTimeout(function playCongats(){
    congrats.classList.remove("live");
    console.log("remove congrats live");
    winModal.style.display = "block";
    console.log("display winModal");

    // scoringPanel.style.display = "grid";
    // console.log("display score panel");
  }, 2000);
}
