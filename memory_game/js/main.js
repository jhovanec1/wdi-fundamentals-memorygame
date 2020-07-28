console.log("Up and running!")
//Create set of cards
let cards = ["queen","queen","king","king"];

//Create empty array for flipped set
let cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}

}


function flipCard(cardId) {
	
	cardsInPlay.push(cards[cardId]);
	
	console.log("User flipped " + cards[cardId]);
	//add if statement so doesnt always check for match if array length != 2
	checkForMatch();
}
flipCard(0);
flipCard(0);