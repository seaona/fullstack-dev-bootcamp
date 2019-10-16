var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var colorDisplay = document.getElementById("colorDisplay");
var difficulty=6;
var colors = generateRandomColors(difficulty);
var pickedColor = pickColor();
var modeButtons = document.querySelectorAll(".mode");


startGame();

//FUNCTIONS

//start game
function startGame(){
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	//display color code in title
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<difficulty; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function()
	{
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor===pickedColor){
			message.textContent="Correct";
			changeColors(pickedColor);
			reset.textContent="Play Again";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent="Try Again";
		}
	});
}
};

//change colors of the squares
function changeColors(color){
	for(var i=0; i<difficulty; i++){
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
};

//pick the searching color 
function pickColor(){
	var random = Math.floor(Math.random() * difficulty);
	return colors[random];
};

//generate the array of random colors
function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
};

//generate random color
function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";	
}

//reset game
function resetGame(){
	reset.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	startGame();	
};


//EVENTS
for (var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=="Hard"){
			difficulty=6;
			resetGame();
		}
		else if(this.textContent=="Easy"){
			difficulty=3;
			squares[3].style.backgroundColor="#232323";
			squares[4].style.backgroundColor="#232323";
			squares[5].style.backgroundColor="#232323";
			resetGame();
		}	
	});
};	

//add event to reset button
reset.addEventListener("click", resetGame);

/*add event to easy button
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	resetGame();
	
});

//add event to hard button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	resetGame();
});*/

