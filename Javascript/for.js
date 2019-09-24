console.log("1. Print all numbers between -10 and 19");
for(var i=-10; i<20; i++){
	console.log(i);
}

console.log("2. Print all even numbers between 10 and 40");
for (var i=10; i<=40; i++){
	if(i%2===0){
		console.log(i);
	}
}

console.log("3. Print all odd numbers between 300 and 333");
for (var i=300; i<334; i++){
	if(i%2!=0){
		console.log(i);
	}
}

console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var i=5; i<51; i++){
	if(i%5===0 && i%3===0){
		console.log(i);
	}
}
