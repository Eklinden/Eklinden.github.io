/**
Simple card game where the user guesses if the next card is
higher, lower or the same value. Points will be given if the player guesses right. 
Game ends if the card deck is empty or if guessed wrong 3 times.
*/

const lowerButton = document.querySelector('#lower');
const equalButton = document.querySelector('#equal');
const higherButton = document.querySelector('#higher');
const scoreElem = document.querySelector('.score');
const attemptsElem = document.querySelector('.attempts');
const cardCountElem = document.querySelector('.left');
const gameoverElem = document.querySelector('#gameover');

let attempts = 3;
let activeCard = {};
let previousCard = {};
let score = 0;

let deck = createDeck();
console.table(deck);
let picked = pickCard();
showCard(picked);

lowerButton.addEventListener('click', lower);
equalButton.addEventListener('click', equal);
higherButton.addEventListener('click', higher);

function createDeck() {
    let deck = [];
    const suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];

    for(let i = 0; i < suits.length; i++) { // Loop through each color
        for(let j = 2; j < 15; j++) { // For each color loop and create card value from 2 - 14
            
            let card = {
                suit: suits[i],
                color: getColor(suits[i]),
                display: getDisplay(j),
                value: j
            };

            deck.push(card);
        }
    }

    function getColor(suit) {
        if (suit == '&hearts;' || suit == '&diams;') {
            return 'red';
        } else {
            return 'black';
        }
    }

    function getDisplay(value) {
        if (value < 11) { return value; }
        else if (value == 11) { return 'J'; }
        else if (value == 12) { return 'D'; }
        else if (value == 13) { return 'K'; }
        else if (value == 14) { return 'A';}
    }

    return deck;
}

function pickCard() {
    const randomPosition = Math.floor(Math.random() * deck.length);
    const pickedCard = deck.splice(randomPosition, 1); //takes away the card for the array and saves it in another
    console.log('Valt kort:', pickedCard[0]);

    // Set active card for comparison
    activeCard = pickedCard[0];

    updatecardCount()

    return pickedCard[0];
}

function showCard(card) {
    const cardHolderElem = document.querySelector('#show-card');

    cardHolderElem.innerHTML = 
        `<section class="front">
            <header><span class="${card.color}">${card.suit}</span>${card.display}</header>
            <div class="suite ${card.color}">${card.suit}</div>
            <footer><span class="${card.color}">${card.suit}</span>${card.display}</footer>
        </section>
        <section class="back"></section>
        `;
}

/** Gamelogic
 * save randomised card
 * choose higher, lower or same
 * Get a new randomised card and show
 * save the new randomised card
 * compare the new randomised cards value with the previous cards value
 */

function lower() {
    if (deck.length > 0 && attempts > 0) {
        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);

        if (activeCard.value < previousCard.value) {
            updateScore();
        } else {
            updateAttempts()
        }
    } else {
        gameoverElem.classList.add('show')
    }
}

function equal() {
    if (deck.length > 0 && attempts > 0) {
        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);

        if (activeCard.value == previousCard.value) {
            updateScore();
        } else {
            updateAttempts()
        }
    } else {
        gameoverElem.classList.add('show')
    }
}

function higher() {
    if (deck.length > 0 && attempts > 0) {
        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);

        if (activeCard.value > previousCard.value) {
            updateScore();
        } else {
            updateAttempts()
        }
    } else {
        gameoverElem.classList.add('show')
    }
}

function updateScore() {
    score = score + 100;
    scoreElem.innerHTML = score;
}

function updateAttempts() {
    attempts--;
    attemptsElem.innerHTML = attempts;

    if (attempts == 0) {
        gameoverElem.classList.add('show')
    }
}

function updatecardCount() {
    cardCountElem.innerHTML = deck.length + " Cards left";
}