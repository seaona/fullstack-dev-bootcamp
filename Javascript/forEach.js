var colors=["red", "orange", "blue"];

function myForEach(arr, func){
	//loop through array
	for(var i=0; i<arr.length; i++){
		//call func for each item in the array
		func(arr[i]);	
	}
}; 

myForEach(colors, function(color){
	alert(color);
});