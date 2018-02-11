var cardList=[
	{rank:"queen",
	 suit:"hearts",
	 cardImage:"images/queen-of-hearts.png",
	 selected:false,
	 id:null
	},
	{rank:"queen",
	 suit:"diamonds",
	 cardImage:"images/queen-of-diamonds.png",
	 selected:false,
	 id:null
	},
	{rank:"king",
	 suit:"hearts",
	 cardImage:"images/king-of-hearts.png",
	 selected:false,
	 id:null
	},
 	{rank:"king",
	 suit:"diamonds",
	 cardImage:"images/king-of-diamonds.png",
	 selected:false,
	 id:null
	}
];

var card = [];
var counter=0;
var successCount=0;
var attemptCount=1;

var createBoard =function(){ 
	document.getElementById("scoreUnderline").innerHTML=successCount;
	document.getElementById("attemptUnderline").innerHTML=attemptCount;
	for (i=0;i<cardList.length;i++){
		card.push(document.createElement('img'));
		card[i].setAttribute('src','images/back.png');
		card[i].setAttribute('data-selected',false);
		card[i].setAttribute('data-ID',i);
		document.getElementById('game-board').appendChild(card[i]);
		flipCard(i);
	};
};

var checkToReset = function(){
	counter=0;
	for (z=0;z<card.length;z++){
		if (card[z].getAttribute('data-selected')==="true"){
			counter+=1;
		};
	};	
};

var flipCard = function(i){
		card[i].addEventListener('click',function(){
			checkToReset();
			if (counter===2){
				return;
			}else{
				if (this.getAttribute('data-selected')==="true"){
					alert("Please select another card!");
				}else {
					var randomnumber = Math.floor(Math.random()*4);
					this.setAttribute('src',cardList[randomnumber].cardImage);
					this.setAttribute('data-selected',"true");
					this.setAttribute('data-rank',cardList[randomnumber].rank);
					var currentCard=+(this.getAttribute('data-ID'));
					checkForMatch(currentCard);
				};	
			};
		});
};

var checkForMatch = function(currentCard){
	for (a=0;a<card.length;a++){
		if (a===currentCard || card[a].getAttribute('data-selected')==="false"){
			continue
		}else{
			if (card[a].getAttribute('data-rank')===card[currentCard].getAttribute('data-rank')){
				alert("Congratulations! You won!");
				updateScore();
				resetButtonFn();
			}else{
				alert("Sorry, not a match:( Try Again!");
				resetButtonFn();
			};
		};
	};
};

var resetButtonFn = function(){

	var resetButtonNode=document.getElementById('resetButton');
		while (resetButtonNode.hasChildNodes()) {
			    resetButtonNode.removeChild(resetButtonNode.lastChild);
		};
	var resetButton=document.createElement('button');
	resetButton.className += 'resetButtonClass';
	resetButton.innerHTML="Click for next round";
	resetButtonNode.appendChild(resetButton);
	resetButton.addEventListener('click',function(){
		//remove all cards in gameboard
		var gameboard = document.getElementById('game-board');
		while (gameboard.hasChildNodes()) {
		    gameboard.removeChild(gameboard.lastChild);
		};
		card=[];
		updateAttempt();
		//recreate board
		createBoard();
		var resetButtonNode=document.getElementById('resetButton');
		while (resetButtonNode.hasChildNodes()) {
			    resetButtonNode.removeChild(resetButtonNode.lastChild);
		};
	});
};

var updateScore = function(){
	successCount+=1;
	document.getElementById("scoreUnderline").innerHTML=successCount;
};

var updateAttempt = function(){
	attemptCount+=1;
	document.getElementById("attemptUnderline").innerHTML=attemptCount;
};

createBoard();


