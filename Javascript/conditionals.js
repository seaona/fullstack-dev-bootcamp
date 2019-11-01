var age = prompt("How old are you?");

if(age<18){
	console.log("Sorry you cannot enter here");
}
else if(age<21){
	console.log("you can get in but cannot drink");
}
else{
	console.log("get in and drink");
}

var perfectSquare= (age % Math.sqrt(age) ===0);
if(perfectSquare){
	console.log("perfect square!");
}