$("button").on("click",function(){
	$("div").slideDown(1000, function(){
		$(this).remove();
	});
});

