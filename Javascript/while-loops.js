console.log("1. PRINT ALL NUMBERS BETWEEN -10 AND 19");
var number=-10;
while(number<=19){
	console.log(number);
	number++;
}

console.log("2. PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var number=10;
while(number<=40){
	console.log(number);
	number+=2;
}

console.log("3. PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
var number=301;
while(number<=333){
	console.log(number);
	number+=2;
}

console.log("4. PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var number=5;
while(number<=50){
	if(number%5===0 && number%3===0){
		console.log(number);
	}
	number++;
}