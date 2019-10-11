		var p1 = document.getElementById("p1");
		var p2 = document.getElementById("p2");

		var p1Display = document.getElementById("p1Display");
		var p2Display = document.getElementById("p2Display");

		var reset = document.getElementById("reset");
		var h1 = document.querySelector("h1");
		var max = document.getElementById("max");
		var input = document.querySelector("input");
		
		var countP1 = 0;
		var countP2 = 0;
		var playingTo = 5;
		var isOver = false;
		

		input.addEventListener("change", function(){
			playingTo = Number(this.value);
			countP1=0;
			countP2=0;
			max.textContent = playingTo;
			resetFunction();  //we call reset function
		});

		p1.addEventListener("click", function(){
			if(!isOver){
				countP1++;
				p1Display.textContent = countP1;
				if(countP1===playingTo){
					p1Display.classList.add("winner");
					isOver=true;
					
				}
			}
			
		});
		
		p2.addEventListener("click", function(){
			if(!isOver){
				countP2++;
				p2Display.textContent = countP2;
				if(countP2===playingTo){
					p2Display.classList.add("winner");
					isOver=true;
					
				}
			}
		});

		reset.addEventListener("click", resetFunction);

		function resetFunction(){
			countP1=0;
			countP2=0;
			
			p1Display.textContent = countP1;
			p2Display.textContent = countP2;
			
			p1Display.classList.remove("winner");
			p2Display.classList.remove("winner");
			
			isOver=false;
		
		};