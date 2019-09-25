console.log("Problem 1: Is Even?");
function isEven(number){
	if(number%2===0){
		return true;
	}
	else{
		return false;
	}

}


console.log("Problem 2: Factorial");
function factorial(number){
	var result=1;
	if(number===0){
		return 1;
	}
	else{
		for(var i=number; i>0; i--){
			var result=result*i
			}
		return result;
		}
}


console.log("Problem 3: Change Kebab-cased to Snake_cased");
function kebabToSnake(str){
	var result="";
	for(var i=0; i<str.length; i++){
		if(str[i]==="-"){
			result=result+"_";
		}
		else{
			result=result+str[i];
		}
	}
	return result;
}

//using Regular Expressions
	//var newStr= str.replace(/-/g , "_");