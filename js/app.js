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
 'puffafish', 'puffafish', 'shark', 'shark', 'squid', 'squid', 'starfish', 'starfish', 'whale', 'whale'];

// level variables
const levelSelect = document.getElementsByClassName('level-select');
const levelOne = document.getElementById('easyButton');
const levelOneClick = document.getElementById('levelSelectE');
const levelOneImage = document.getElementById('easyI');
const levelOneThemes = document.getElementsByClassName('easy');
const levelOneChoices = document.querySelector('.easyThemeSelection');

const levelTwo = document.getElementById('mediumButton');
const levelTwoClick = document.getElementById('levelSelectM');
const levelTwoImage = document.getElementById('mediumI');
const levelTwoThemes = document.getElementsByClassName('medium');
const levelTwoChoices = document.querySelector('.mediumThemeSelection');

const levelThree = document.getElementById('hardButton');
const levelThreeClick = document.getElementById('levelSelectH');
const levelThreeImage = document.getElementById('hardI');
const levelThreeThemes = document.getElementsByClassName('hard');
const levelThreeChoices = document.querySelector('.hardThemeSelection');

const levelFour = document.getElementById('expertButton');
const levelFourClick = document.getElementById('levelSelectEx');
const levelFourImage = document.getElementById('expertI');
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

levelOneClick.addEventListener("click", levelSelectionChange);
levelTwoClick.addEventListener("click", levelSelectionChange);
levelThreeClick.addEventListener("click", levelSelectionChange);
levelFourClick.addEventListener("click", levelSelectionChange);
// function to change body to choosen level and add choosen level to levelMode
function levelSelectionChange(e){
  const body = document.querySelector("body");
  if (e.target.classList.contains('easy')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('easyThemeSelection');
    choosen.style.display = "grid";
    levelMode.push("easy");
    body.classList.add("Easy");
  }
  if (e.target.classList.contains('medium')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('mediumThemeSelection');
    choosen.style.display = "grid";
    levelMode.push("medium");
    body.classList.add("Medium");
  }
  if (e.target.classList.contains('hard')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('hardThemeSelection');
    choosen.style.display = "grid";
    levelMode.push("hard");
    body.classList.add("Hard");
  }
  if (e.target.classList.contains('expert')) {
    levelSelects.style.display = "none";
    themeSelects.style.display = "block";
    let choosen = document.getElementById('expertThemeSelection');
    choosen.style.display = "grid";
    levelMode.push("expert");
    body.classList.add("Expert");
  }
}
// add event listeners to easy theme selections
const butterfliesSelection = document.getElementById("selectButterflies");
const farmyardSelection = document.getElementById("selectFarmyard");
butterfliesSelection.addEventListener("click", switchDecks);
farmyardSelection.addEventListener("click", switchDecks);
// medium themes
const birdsSelection = document.getElementById("selectBirds");
const bugsSelection = document.getElementById("selectBugs");
const reptilesSelection = document.getElementById("selectReptiles");
birdsSelection.addEventListener("click", switchDecks);
bugsSelection.addEventListener("click", switchDecks);
reptilesSelection.addEventListener("click", switchDecks);
// hard themes
const dinosaursSelection = document.getElementById("selectDinosaurs");
const endangeredSelection = document.getElementById("selectEndangered");
const woodlandSelection = document.getElementById("selectWoodland");
dinosaursSelection.addEventListener("click", switchDecks);
endangeredSelection.addEventListener("click", switchDecks);
woodlandSelection.addEventListener("click", switchDecks);
// expert themes
const sealifeSelection = document.getElementById("selectSealife");
sealifeSelection.addEventListener("click", switchDecks);
// Intro and level select Modal
const levelModal = document.getElementById("levelModal");
const levelSelections = document.querySelector('.level');
// function to show level selection modal on document load
function introPopup(){
document.onload = levelModal.style.display = "block";
}
introPopup();
// function to add choosen theme to levelMode
function switchDecks(e){
  // easy themes
  if (e.target.classList.contains('butterflies')) {
    levelMode.push("selectButterflies");
  }
  if (e.target.classList.contains('farmyard')) {
    levelMode.push("selectFarmyard");
  }
  // medium themes
  if (e.target.classList.contains('birds')) {
    levelMode.push("selectBirds");
  }
  if (e.target.classList.contains('bugs')) {
  levelMode.push("selectBugs");
  }
  if (e.target.classList.contains('reptiles')) {
  levelMode.push("selectReptiles");
  }
  // hard themes
  if (e.target.classList.contains('dinosaurs')) {
    levelMode.push("selectDinosaurs");
  }
  if (e.target.classList.contains('endangered')) {
  levelMode.push("selectEndangered");
  }
  if (e.target.classList.contains('woodland')) {
  levelMode.push("selectWoodland");
  }
  // expert themeSelects
  if (e.target.classList.contains('sealife')) {
  levelMode.push("selectSealife");
  }
levelModal.style.display = "none";
dealCards();
createTimer();

}
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
// function to create game area container, header, and difficulty class
function createContainer(){
  const body = document.querySelector("body");
  const bodyNameLevel = body.classList[0];
  const container = document.createElement('div');
  container.classList = 'container';
  body.insertBefore(container, levelModal);
  const headingContainer = document.createElement('div');
  headingContainer.classList = "heading"
  container.appendChild(headingContainer);
  const heading = document.createElement("header");
  heading.innerHTML = "<h1>Matching Game</h1>";
  headingContainer.appendChild(heading);
  const levelLog = document.createElement("p");
  levelLog.classList = "difficulty-class";
  levelLog.innerText = "Difficulty: " + bodyNameLevel;
  headingContainer.appendChild(levelLog);
}
// function to create star rating in game area
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
      const stars = document.createElement('p');
      starList.appendChild(stars);
      stars.classList = 'fa fa-star';
      scores.appendChild(starRating);
      }
}
// function to create move counter in game area
function createMovecounter(){
  const scores = document.querySelector(".score-panel");
  const moveCounter = document.createElement('div');
  scores.appendChild(moveCounter);
  const moveNumber = document.createElement('SPAN');
  // moveNumber.val;
  moveNumber.classList = 'moves';
  moveCounter.appendChild(moveNumber);
  const moveText = document.createElement('SPAN');
  moveText.textContent = " Moves";
  moveCounter.appendChild(moveText);
}
// function to create timer in game area
function createTimer(){
  const scores = document.querySelector(".score-panel");
  const timer = document.createElement('div');
  // timer.textContent = "0";
  timer.id = "txt";
  timer.classList = "timer";
  // let timerInner = document.getElementsByTagName('DIV')
  scores.appendChild(timer);

}
// function to create timer, called on first card click
var c=0
var t
// timer code from http://www.w3school.com.cn/js/js_timing.asp
function timedCount(){
 document.getElementById('txt').innerHTML=c
 c=c+1
 t=setTimeout("timedCount()",1000)
}

function stopCount(){
 clearTimeout(t)
}


// function to create restart button
function createRestartButton(){
  const scores = document.querySelector(".score-panel");
  const restartButton = document.createElement('div');
  scores.appendChild(restartButton);
  restartButton.classList = 'restart';
  const restart = document.createElement('p');
  restart.classList = 'fa fa-repeat';
  restartButton.appendChild(restart);
  restartButton.addEventListener("click", restartGame);
}
// call to restart game - forces page reload
function restartGame(){
  location.reload(true);
}
// deal cards for each theme (called on user theme selection)
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
  const deck = document.querySelector(".deck");
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
        cardDetails.src = 'https://github.com/rhovell/memory-game/img/game-sets/easy/butterflies/red.png';
      }
      if(cardDetails.classList[2] === blueSelect){
        // img/game-sets/easy/butterflies/blue.png
        cardDetails.src = 'https://github.com/rhovell/memory-game/img/game-sets/easy/butterflies/blue.png';
      }
      if(cardDetails.classList[2] === yellowSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/img/game-sets/easy/butterflies/yellow.png';
      }
      if(cardDetails.classList[2] === orangeSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/img/game-sets/easy/butterflies/orange.png';
      }
    placedCard.appendChild(cardDetails);
  }
  // add level details to deck and body
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
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/easy/farmyard/chicken.png';
      }
      if(cardDetails.classList[2] === cowSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/easy/farmyard/cow.png';
      }
      if(cardDetails.classList[2] === pigSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/easy/farmyard/pig.png';
      }
      if(cardDetails.classList[2] === sheepSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/easy/farmyard/sheep.png';
      }
      placedCard.appendChild(cardDetails);
    }
    // add level details to deck and body
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
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/humming-bird.png';
      }
      if(cardDetails.classList[2] === kiwiSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/kiwi.png';
      }
      if(cardDetails.classList[2] === ostrichSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/ostrich.png';
      }
      if(cardDetails.classList[2] === parrotSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/parrot.png';
      }
      if(cardDetails.classList[2] === penguinSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/penguin.png';
      }
      if(cardDetails.classList[2] === tucanSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/birds/tucan.png';
      }
      placedCard.appendChild(cardDetails);
    }
    // add level details to deck and body
      deck.classList.add("medium");
      deck.classList.add("birds");
      body.classList.add("birds");
      // end of butterfly deck
    }
// bug theme
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
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/bee.png';
      }
      if(cardDetails.classList[2] === beetleSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/beetle.png';
      }
      if(cardDetails.classList[2] === cricketSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/cricket.png';
      }
      if(cardDetails.classList[2] === dragonflySelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/dragonfly.png';
      }
      if(cardDetails.classList[2] === ladybirdSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/ladybird.png';
      }
      if(cardDetails.classList[2] === snailSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/bugs/snail.png';
      }
      placedCard.appendChild(cardDetails);
    }
    // add level details to deck and body
      deck.classList.add("medium");
      deck.classList.add("bugs");
      body.classList.add("bugs");
      // end of bugs deck
    }
// reptile theme
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
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/chameleon.png';
      }
      if(cardDetails.classList[2] === cobraSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/cobra.png';
      }
      if(cardDetails.classList[2] === frogSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/frog.png';
      }
      if(cardDetails.classList[2] === lizardSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/lizard.png';
      }
      if(cardDetails.classList[2] === newtSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/newt.png';
      }
      if(cardDetails.classList[2] === turtleSelect){
        cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/medium/reptiles/turtle.png';
      }
      placedCard.appendChild(cardDetails);
    }
    // add level details to deck and body
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
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/ankylosaurus.png';
        }
        if(cardDetails.classList[2] === corySelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/corythosaurus.png';
        }
        if(cardDetails.classList[2] === diplSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/diplodocos.png';
        }
        if(cardDetails.classList[2] === paraSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/parasaurolophus.png';
        }
        if(cardDetails.classList[2] === pteSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/pterodactyl.png';
        }
        if(cardDetails.classList[2] === stegSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/stegosaurus.png';
        }
        if(cardDetails.classList[2] === triSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/triceratops.png';
        }
        if(cardDetails.classList[2] === veloSelect){
          cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/dinosaurs/velociraptor.png';
        }
        placedCard.appendChild(cardDetails);
      }
      // add level details to deck and body
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
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/baboon.png';
          }
          if(cardDetails.classList[2] === bearSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/bear.png';
          }
          if(cardDetails.classList[2] === eleSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/elephant.png';
          }
          if(cardDetails.classList[2] === hyenaSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/hyena.png';
          }
          if(cardDetails.classList[2] === lionSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/lion.png';
          }
          if(cardDetails.classList[2] === pandaSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/panda.png';
          }
          if(cardDetails.classList[2] === platSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/platypus.png';
          }
          if(cardDetails.classList[2] === polaSelect){
            cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/endangered/polar-bear.png';
          }
          placedCard.appendChild(cardDetails);
        }
        // add level details to deck and body
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
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/badger.png';
            }
            if(cardDetails.classList[2] === deerSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/deer.png';
            }
            if(cardDetails.classList[2] === foxSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/fox.png';
            }
            if(cardDetails.classList[2] === hedgehogSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/hedgehog.png';
            }
            if(cardDetails.classList[2] === mouseSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/mouse.png';
            }
            if(cardDetails.classList[2] === owlSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/owl.png';
            }
            if(cardDetails.classList[2] === rabbitSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/rabbit.png';
            }
            if(cardDetails.classList[2] === squirrelSelect){
              cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/hard/woodland/squirrel.png';
            }
            placedCard.appendChild(cardDetails);
          }
          // add level details to deck and body
            deck.classList.add("hard");
            deck.classList.add("woodland");
            body.classList.add("woodland");
            // end of endangered deck
          }
          // end of hard decks
          // expert decks
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
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/clownfish.png';
              }
              if(cardDetails.classList[2] === dolphinSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/dolphin.png';
              }
              if(cardDetails.classList[2] === hermitSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/hermit-crab.png';
              }
              if(cardDetails.classList[2] === kwhaleSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/killer-whale.png';
              }
              if(cardDetails.classList[2] === octopusSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/octopus.png';
              }
              if(cardDetails.classList[2] === puffaSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/puffafish.png';
              }
              if(cardDetails.classList[2] === sharkSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/shark.png';
              }
              if(cardDetails.classList[2] === squidSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/squid.png';
              }
              if(cardDetails.classList[2] === stfishSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/starfish.png';
              }
              if(cardDetails.classList[2] === whaleSelect){
                cardDetails.src = 'https://github.com/rhovell/memory-game/tree/master/img/game-sets/expert/sealife/whale.png';
              }
              placedCard.appendChild(cardDetails);
            }
            // add level details to deck and body
              deck.classList.add("expert");
              deck.classList.add("sealife");
              body.classList.add("sealife");
              // end of endangered deck
            }
    dealtCards.addEventListener('click', respondToTheClick);
  }
}
// function to call all other functions when card is clicked
function respondToTheClick(e) {
// check if the target that is clicked is the li
if (e.target.tagName === 'LI') {
  let moveCounter = document.querySelector('.moves');
  let moves = moveCounter.innerText;
  if(moves === "" && openCards.length === 0){
  timedCount();
}

  if (openCards.length < 2){
  // toggles open and show class
      e.target.classList.add('open','show','disabled');
  // fucntion variables
      let choice = document.querySelector('.card.open');
      let choices = e.target.firstChild.classList[2];
      let choiceImage = $(".open.show").find(".cardSymbols");
      choices.toArray;
      e.target.removeEventListener('click', respondToTheClick);
      openCards.push(choices);
      // perform check function
      moveCount();
      check(cards);

    }
  }
}
function check(event) {
// variables for new openCards array
  let firstChoice = openCards[0];
  let secondChoice = openCards[1];
// if cards match
  if(openCards.length % 2 === 0 && firstChoice === secondChoice){
    match();
  }
// if cards dont match
  if(openCards.length % 2 === 0 && firstChoice != secondChoice){
    notAMatch = setTimeout(function noMatch(){
    let selects = $(".open.show");
    selects.addClass("wrong");
    clear();
    },1001);

  }
}
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
// winning scenario function with call to winning animation
 function winCall(){
   let winArray = matchedCards.length;
   let easySelector = "easy";
   let mediumSelector = "medium";
   let hardSelector = "hard";
   let expertSelector = "expert";
   let card = document.querySelector(".card");
     for(let i = 0; i < matchedCards.length; i++){
       if(levelMode[i] === easySelector){
         if(winArray === 8){
           win();
           stopCount();
         }
       }
       if(levelMode[i] === mediumSelector){
         if(winArray === 12){
           win();
           stopCount();
         }
       }
       if(levelMode[i] === hardSelector){
         if(winArray === 16){
           win();
           stopCount();
         }
       }
       if(levelMode[i] === expertSelector){
         if(winArray === 20){
           win();
           stopCount();
         }
       }
     }
 }
// wrong choice function
function clear(){
  clearOpen = setTimeout(function(){
    let openSelects = $(".open.show");
    openSelects.removeClass("open show disabled");
  },100);
  myVar = setTimeout(function clearWrong(){
    let selects = $(".card.wrong");
    selects.removeClass("wrong");
    openCards.splice(0, 2);
}, 1000);
}
// function to count moves (2 clicks = 1 move)
function moveCount(){
  let easySelector = "easy";
  let mediumSelector = "medium";
  let hardSelector = "hard";
  let expertSelector = "expert";
  let card = document.querySelector(".card");
  let moveCounter = document.querySelector('.moves');
  let moves = moveCounter.innerText;
  let starRatings = document.querySelector(".stars");
  let star = $(".stars").find("p");
  if(openCards.length === 2){
  moves++;
  moveCounter.innerText = moves;
}
  for(let i = 0; i < 100; i++){
    // easy mode
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
// medium mode
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
// hard mode
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
// expert mode
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
// winning animation
function win(){
  let winModal = document.querySelector(".winModal");
  let congrats = document.querySelector(".congrats");
  let scoringPanel = document.querySelector(".winning-score");
  let scoringMoves = document.querySelector("#printMoves");
  let scoringStars = document.querySelector("#printStars");

  let winArray = matchedCards.length;
  let easySelector = "Easy";
  let mediumSelector = "Medium";
  let hardSelector = "Hard";
  let expertSelector = "Expert";
  let card = document.querySelector(".card");
  let moveCounter = document.querySelector('.moves');
  let moves = moveCounter.innerText;
  let body = document.body;
    congrats.classList.add("live");
    scoringMoves.innerText = moves;
  let timeCounter = document.querySelector('.timer');
  let scoringMinutes = document.querySelector("#printMinutes");
  let scoringSeconds = document.querySelector("#printSeconds");
  let time = timeCounter.innerText;
  if(time < 60){
  scoringMinutes.innerText = "0";
  scoringSeconds.innerText = time;
}
if (time > 60){
minutes = Math.floor(time / 60);
scoringMinutes.innerText = minutes;
timeSecs = time - minutes * 60;
scoringSeconds.innerText = timeSecs;

}
    // easy mode
    if(body.classList.contains("Easy")){
      if(moves > 1){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 7){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 8){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 9){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 10){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > 10){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }
    // medium mode
    if(body.classList.contains("Medium")){
      if(moves > 1){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 10){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 11){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 12){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 13){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > 13){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }
    // hard mode
    if(body.classList.contains("Hard")){
      if(moves > 1){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 14){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 15){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 16){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 18){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > 18){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }
    // expert mode
    if(body.classList.contains("Expert")){
      if(moves > 1){
        scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 17){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 18){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fa fa-star'></i>";
      }
      if(moves >= 19){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i><i class = 'fas fa-star-half'></i>";
      }
      if(moves >= 20){
      scoringStars.innerHTML = "<i class = 'fa fa-star'></i>";
      }
      if(moves > 20){
      scoringStars.innerHTML = "<i class = 'fas fa-star-half'></i>";
      }
    }
    // timed function to delay appearance of winning modal after congrats disappers
  congratAni = setTimeout(function playCongats(){
    congrats.classList.remove("live");
    winModal.style.display = "block";
  }, 2000);
};
