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

function buildString(movie){
	if(movie.hasWatched==="y"){
		var result="You have watched " + movie.title + " - " + movie.rating;
	}
	else{
		var result="You have not watched " + movie.title + " - " + movie.rating;
	}
	return result;
}

movieDB.forEach(function(movie){
	console.log(buildString(movie));
});
