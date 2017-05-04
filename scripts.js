
var buyVowel = document.getElementsByClassName("vowel")[0];
var newPuzzle = document.getElementsByClassName("newPuzzle")[0];
var money = document.getElementsByClassName("money")[0];
var solve = document.getElementsByClassName("solve")[0];
var hint = document.getElementsByClassName("hint")[0];
var score = document.getElementsByClassName("score")[0];

vowels = ['A', 'E', 'I', 'O', 'U'];

// buyVowel.addEventListener("click", function(){
// 	return alert("test");
// }
// newButton.addEventListener("click", function(){
// }
// money.addEventListener("click", function(){
// }
// solve.addEventListener("click", function(){
// }

function randomPuzzle(){

	var puzzleArray = ["doctor who", "the dark knight rises", "wheel of fortune",
    "facebook", "twitter", "google plus", "sea world", "pastrami on rye",
    "i am sparta", "whose line is it anyway", "google chrome"];
	
	puzzle = puzzleArray[Math.floor(Math.random()*puzzleArray.length)];

	return puzzle;
}


function placePuzzle(){
	var puzzleLocation = document.getElementsByClassName("display")[0];
	var spaceSplit = randomPuzzle().split(""); 
	var letterHolding = [];

	// console.log(spaceSplit); 

	for (var i = 0; i < spaceSplit.length; i++) {
		var letterSplit = spaceSplit[i].split("");
		letterHolding.push(letterSplit);
	}

	// console.log(letterHolding);

	var emptyString = "";
	for (var i = 0; i < letterHolding.length; i++) {
		emptyString += letterHolding[i];
	}
	
	divLetter(spaceSplit);
}

function divLetter(spaceSplit){
	var puzzleLocation = document.getElementsByClassName("display")[0];
	for (var i = 0; i < spaceSplit.length; i++) {
		var divCreator = "<div class='tiles'>"
		divCreator += spaceSplit[i]
		divCreator += "</div>"
		puzzleLocation.innerHTML += divCreator;
	}
	
}

placePuzzle();









