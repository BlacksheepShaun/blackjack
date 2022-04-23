let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

let message = "";

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂"
    
    } else if (sum === 21) {
        message = "Yayy! You've gotten Blackjack!  🥳"
    
        hasBlackjack = true;
    
    } else {
        message = "You are out of the game! 😭"
    
        isAlive = false;
    
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}