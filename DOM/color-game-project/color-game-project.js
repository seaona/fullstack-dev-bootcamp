var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var colorDisplay = document.getElementById("colorDisplay");
var difficulty=6;
var colors = generateRandomColors(difficulty);
var pickedColor = pickColor();
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


startGame();

function startGame(){
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

function changeColors(color){
	for(var i=0; i<difficulty; i++){
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
};

function pickColor(){
	var random = Math.floor(Math.random() * difficulty);
	return colors[random];
};

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "rgb("+red+", "+green+", "+blue+")";	
}

function resetGame(){
	reset.addEventListener("click", function(){
		reset.textContent="New Colors";
		h1.style.backgroundColor="#232323";
		colors = generateRandomColors(difficulty);
		pickedColor = pickColor();
		if(easyBtn.classList=="selected"){
			squares[3].style.backgroundColor="#232323";
			squares[4].style.backgroundColor="#232323";
			squares[5].style.backgroundColor="#232323";
		}
		
	});
	startGame();
};


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	difficulty=3;
	squares[3].style.backgroundColor="#232323";
	squares[4].style.backgroundColor="#232323";
	squares[5].style.backgroundColor="#232323";
	resetGame();

});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	difficulty=6;
	resetGame();
});