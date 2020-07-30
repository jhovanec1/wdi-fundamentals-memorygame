console.log("Up and running!")
//Create object array for set of cards and their details
let cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//Create empty array for what user flipped
let cardsInPlay = [];

//function for determining if 2 cards were flipped and if they match.
//Popup to inform user
function checkForMatch() {
	
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	} else {
		return;
	}
}

//function for "flipping" the card thats clicked on and 
//then starting checkForMatch function
function flipCard() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src' , cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

//function for initializing the starting board in html
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
function reset() {
	location.reload();
}
//Execute createboard function
createBoard();
//Have reset button reload page
let resetButton = document.getElementByType('button');
resetButton.addEventListener('click', reset);
