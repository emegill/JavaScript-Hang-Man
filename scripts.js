
var guessLetter = document.getElementsByClassName("letter")[0];
var newPuzzle = document.getElementsByClassName("newPuzzle")[0];
var solve = document.getElementsByClassName("solve")[0];
var hint = document.getElementsByClassName("hint")[0];
var letterInput = document.getElementsByClassName("letterInput")[0];
var solveInput = document.getElementsByClassName("solveInput")[0];
var newPuzzle = document.getElementsByClassName("newPuzzle")[0];
var puzzle;
var clue;


newPuzzle.addEventListener("click", refresh);

function refresh(){
	location.reload();
}


solve.addEventListener("click", solvePuzzle);

function solvePuzzle(){
	var correctPuzzle = false;
	for (var i = 0; i < puzzle.length; i++) {
		if (solveInput.value.toUpperCase() === puzzle){
			document.getElementsByClassName("innerTile")[i].style.display = "block";
			correctPuzzle = true;
		}

	}
	if (correctPuzzle === false) {
		alert("WRONG! Try again!")
	}
}		

guessLetter.addEventListener("click", lettercheck);
	
function lettercheck(){
	var correctAnswer = false;
	console.log(letterInput.value)
	for (var i = 0; i < puzzle.length; i++) {
		console.log(puzzle[i])
		if (letterInput.value.toUpperCase() === puzzle[i]) {
			document.getElementsByClassName("innerTile")[i].style.display = "block";
				correctAnswer = true;
		}

	}
	if (correctAnswer === false) {
	 	alert("WRONG! Guess again!");
	}
}



function randomPuzzle(){

	var clueArray = ["knock knock", "batman", "this game", "mark made it", "the bird", "+", "free Willy", "jewish deli sandwitch", "300", "improv show", "the only web broswer"];

	var puzzleArray = ["DOCTOR WHO", "THE DARK KNIGHT RISES", "WHEEL OF FORTUNE",
    "FACEBOOK", "TWITTER", "GOOGLE PLUS", "SEA WORLD", "PASTRAMI ON RYE",
    "I AM SPARTA", "WHOSE LINE IS IT ANYWAY", "GOOGLE CHROME"];

    var random = Math.floor(Math.random()*puzzleArray.length);
    console.log(random);
	
	puzzle = puzzleArray[random];
	clue = clueArray[random];

	document.getElementsByClassName("hint")[0].innerHTML = clue;

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
		var divCreator = document.createElement("div");
		divCreator.classList.add("outterTile");

		var divInnerCreator = document.createElement("div");
		divInnerCreator.classList.add("innerTile");
		divInnerCreator.innerHTML += spaceSplit[i];

		puzzleLocation.append(divCreator);
		divCreator.append(divInnerCreator);
	}
	
}

placePuzzle();









