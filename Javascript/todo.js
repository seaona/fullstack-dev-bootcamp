var todos=[];
var input = prompt("What would you like to do?");

while(input!=="quit"){
	//handle input
    if(input==="new"){
    	addTodo();
	}
	else if(input==="list"){
		listTodos();  
	}
	else if(input==="delete"){
		deleteTodo();
      }
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("you quit");


function listTodos(){
	console.log("********");
	todos.forEach(function(todo, index){
	console.log(index+":"+todo);
	});
	console.log("********");
}

function addTodo(){
	var todo=prompt("Add a Todo");
	todos.push(todo);
	console.log("you added");
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var todoIndex=prompt("Specify an index");
	//delete todo (which one, and from there, how many)
	todos.splice(todoIndex,1);
	console.log("you deleted item "+todoIndex);
}