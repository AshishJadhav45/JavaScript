let cards = [];
let sum = 0;
let blackjack = false;
let isAlive = false;
let message = "";

let text = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: "nothing",
    chips: 123
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    renderGame();
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Yo! You got a blackjack!";
        blackjack = true;
    } else {
        message = "You are out of the game";
        isAlive = false;
    }
    text.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive && !blackjack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}
