/**
 * 1. Koppla en eventlyssnare till knappen
 * 2. När jag klickar på knappen slumpa ett number
 * 3. Baserat på numret applicera en av följande css-klasser på tärningen
 * (dots-1, dots-2, dots-3, dots-4, dots-5, dots-6)
 */
const dice = {
    sides:6,
    throw: function() {
        return Math.ceil(Math.random() * dice.sides);
    }
}
var score = 0;
var counter = 0;

const throwButton = document.querySelector('#throw-button');
const scoreButton = document.querySelector('#score-button');
const diceElem = document.querySelector('#theDice');

function resetScore () {
    score = 0;
    return score
}
function resetCount () {
    counter = 0;
    return counter
}

scoreButton.addEventListener('click', () => {
    score = resetScore (score)
    counter = resetCount (counter)

    document.getElementById('score').innerHTML = score;
    document.getElementById('counter').innerHTML = counter;
})

throwButton.addEventListener('click', () => {
    const result = dice.throw();
    
    console.log(`Nummer slumpat: ${result}`);
    diceElem.classList = '';
    diceElem.classList.add('dice', `dots-${result}`);
    if (score < 6 && result == score + 1) {
        score+=1;
        document.getElementById('score').innerHTML = score;
        if (score == 6) {
            document.getElementById('score').innerHTML = 'You Won';
        }
    }
    counter+=1;
    document.getElementById('counter').innerHTML = counter;
});