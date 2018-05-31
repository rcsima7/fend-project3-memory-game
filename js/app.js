/*
 * Create a list that holds all of your cards
 */

 const shapes = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt",
  "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb",
  "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

const cardsFlipped = [];
let flippedCount = [];

//Insert cards into this parent
const cardsParent = document.querySelector('.deck');

// Build the cards
for (let i = 0; i < shapes.length; i++) {
  const card = document.createElement ('li');
  card.classList.add('card'); //Choose a parent to insert these classes into: cardsParent
  card.innerHTML = "<i class='" + shapes[i] + "'</i>"; //Insert shapes into cards
  cardsParent.appendChild(card);

  // Loop through each card to add event listeners
    card.addEeventListener('click', showCard);
    const showCard = function () {

      //1 card is already open
      if(cardsFlipped.length === 1) {
        //Push opened cards into cardsFlipped array
        card.classList.add('open' 'show');
        cardsFlipped.push(this); //This is the clicked card

      //Check is flipped cards match
      if (this.innerHTML === cardsFlipped[0].innerHTML) { //this here is the 2nd card clicked. cardsFlipped0 is the first card clicked
          this.classList.add('match');
          cardsFlipped[0].classList.add('match');
      }

      //0 card is already open
      } else {
        //Push opened cards into cardsFlipped array
        card.classList.add('open' 'show');
        cardsFlipped.push(this); //This is the clicked card
      }

    }

}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
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

// Shuffle and display cards on deck to start the game.

let shuffleDeck = shuffle(cardDeck);
let deck = document.querySelector("deck");

function gameInit () {
  for (let i = 0; i < shuffleDeck.length; i++)
  deck.appendChild(shuffleDeck[i])
  shuffleDeck[i].classList.remove('show', 'open', 'match', 'disabled')
}

// Start game when page is reloaded

window.onload = gameInit();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
