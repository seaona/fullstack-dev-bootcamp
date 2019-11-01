//Problem 1: Print Reverse
printReverse([1,2,3,4,5]);

function printReverse(arrayToReverse){
	for(var i=arrayToReverse.length-1;i>=0; i--){
		console.log(arrayToReverse[i]);
	}
}


//Problem 2: Is Uniform
isUniform([1,1,1,1]);
isUniform([1,2,1,1]);
isUniform(["a","a","a"]);
isUniform(["a","b","a","c"]);

function isUniform(arrayToCheck){
	var first=arr[0];
	for(var i=1; i<arrayToCheck.length;i++){
		if(first!==arrayToCheck[i]){
			return false;
		}	
	}
	return true
}

//Problem 3: Sum Array
sumArray([1,2,10,1]);
sumArray([-5,100]);
sumArray([3,20,20,4]);

function sumArray(arrayToSum){
	var total=0;
	arrayToSum.forEach(function(element){
		total+=element;
	})
	console.log(total);
}

//Problem 4: Max Array
max([1,2,4]);
max([3,45,69]);
max([-3,-600,-2]);

function max(whichMax){
	var max=whichMax[0];
	for(var i=1; i<whichMax.length; i++){
		if(whichMax[i]>max){
			max=whichMax[i];
		}
	}
	console.log(max);
}