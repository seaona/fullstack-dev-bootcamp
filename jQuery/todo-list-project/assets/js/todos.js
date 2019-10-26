$("input").keypress(function(event){
	if(event.which===13){
		var inputBox=$(this).val();
		$("ul").append("<li><span>X</span> "+inputBox+"</li>");
		$(this).val("");
	}
});

//we are adding a listener to an element that exists when the page loads, but we really only listen to the lis inside ul
$("ul").on("click", "li", function(){ //we add a listener to the ul parent, bc at the beginning we have a number of lis but after this changes. so everytime we click on ul, the event will fire. The second argument, when a li is click, inside the ul. 
	$(this).toggleClass("done");
})


//we only run the code when a span is clicked inside the ul
//we first listen an element that exists (ul)
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //this this refers to the li (child), not the span (parent)
	});
	event.stopPropagation();
	
})