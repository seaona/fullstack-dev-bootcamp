var count=0;
var movieDB = [];

while(count<4){
	var addMovie=prompt("Do you want to add a movie? (y/n)");
		var movie = {};
		if(addMovie==="y"){
			movie.title= prompt("title");
			movie.rating=prompt("rating");
			movie.hasWatched=prompt("have you watched it? (y/n)");
			movieDB.push(movie);
		}
	count++;
}

movieDB.forEach(function(movie){
	if(movie.hasWatched==="y"){
		console.log("You have watched " + movie.title + " - " + movie.rating);
	}
	else{
		console.log("You have not watched " + movie.title + " - " + movie.rating);
	}

});
