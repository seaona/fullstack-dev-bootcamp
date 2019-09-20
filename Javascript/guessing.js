
var hiddenNumber= 10;
var numberFound=false;



while(numberFound==false){
	var number=Number(prompt("Say a number"));

	if(number>hiddenNumber){
	alert("Too high");
	}	
	
	else if (number<hiddenNumber){
	alert("Too low");
	}

	else if (number===hiddenNumber){
		numberFound=true;		
	}
}
alert("You found it!!");

