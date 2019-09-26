var todos=[];
var input = prompt("What would you like to do?");

while(input!=="quit"){
    if(input==="new"){
	    var todo=prompt("Add a Todo");
	    todos.push(todo);
	}
	else if(input==="list"){
	    console.log(todos);
	}
	input = prompt("What would you like to do?");
      }
console.log("you quit");