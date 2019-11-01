var answer=prompt("Are we there yet?");
var stopper=false;

while(answer!=="yes" && answer!=="yeah" && stopper===false){
	if(answer.indexOf("yes")!==-1){
		var stopper=true;
	}
	else{
		var answer=prompt("Are we there yet?");
	}
}

alert("Yay, we finally made it");
