console.log("Up and running!")
//Create set of cards
let cards = ["queen","queen","king","king"];

//Create empty array for flipped set
let cardsInPlay = [];

//Define first card flipped
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
//console.log(cardsInPlay);

//Define second card flipped
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

//Determine if cards are matching and create pop up message
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}