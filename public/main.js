const deck = [];
let userHandOne = [];
let userHandTwo = [];
let houseHand = [];

let handOneTotal = 0;
let handTwoTotal = 0;
let houseTotal = 0;

const createDeck = () => {
  const suits = ["hearts", "clubs", "spades", "diamonds"];
  const values = [
    { name: "ace", value: 11 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "jack", value: 10 },
    { name: "queen", value: 10 },
    { name: "king", value: 10 }
  ];
  for (let i = 0; i < suits.length; i++) {
    let suit = suits[i];
    for (let j = 0; j < values.length; j++) {
      let value = values[j];
      deck.push({
        suit: suit,
        rank: value.name,
        number: value.value
      });
    }
    // console.log(deck);
  }
};

const shuffleDeck = () => {
  for (let i = 0; i < deck.length; i++) {
    //now gen a floored num
    //then swap deck[i] with deck[rando]
    let randomNum = Math.floor(Math.random() * i + 1);
    let temp = deck[i];
    deck[i] = deck[randomNum];
    deck[randomNum] = temp;
    // console.log("deck[i] =>", deck[i]);
    // console.log(randomNum);
  }
  console.log(deck);
};

//deal cards and pop cards dealt from deck
//try doing this using a nested loop*********
//Use a loop to deal 2 cards to 2 hands.

const dealCards = () => {
  for (let i = 0; i < 2; i++) {
    userHandOne.push(deck[i]);
    deck.pop(deck[i]);
    userHandTwo.push(deck[i + 2]);
    deck.pop(deck[i + 2]);
    houseHand.push(deck[i + 4]);
    deck.pop(deck[i + 4]);
  }
  console.log(userHandOne);
  console.log(userHandTwo);
  console.log(houseHand);
};

// const hitMe = () => {

// };

const showCardsPlayerOne = () => {};
document // if show Cards is clicked then display hand=> p tag
  .querySelector("player-1-show-cards-button").addEventListener;
document // if hit is clicked, hit me with a single card.
  .querySelector(".hit-button")
  .addEventListener("click", hitMe);
document //deal cards
  .querySelector(".deal-cards-button")
  .addEventListener("click", dealCards);
document //if shuffle is clicked then perform shuffle function
  .querySelector(".shuffle-deck-button")
  .addEventListener("click", shuffleDeck);
document.addEventListener("DOMContentLoaded", createDeck);
