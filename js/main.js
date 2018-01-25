var card =["queen","queen","king","king"];
var cardsInPlay=[];
var cardOne=card[0];
cardsInPlay.push(cardOne);
var cardTwo=card[2];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length===2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match");
	}else {
		alert("Sorry, try again");
	}
}