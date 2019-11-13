//adding express framework
var express = require("express");
var app = express();

//initial page
app.get("/", function(req,res){
    res.send("hi there, welcome to my assignment");
});


//animals pages
app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal;

    if(animal=="pig"){
        res.send("The pig says 'Oink'");
    }

    else if (animal=="cow"){
        res.send("The cow says 'Moo'");
    }

    else if (animal=="dog"){
        res.send("The dog says 'Woof Woof'");
    }  
});

//repeating params
app.get("/repeat/:word/:times", function(req,res){
    var word = req.params.word;
    var times = req.params.times;
    var response="";

    for(var i = 0; i<times; i++){
        response=response+" "+ word;
    };

    res.send(response);
});

//visiting any other page
app.get("*", function(req,res){
    res.send("Sorry, page not found ... What are you doing with your life?");
});

//start server on port 3000
app.listen(3000, function(){
    console.log("server has started");
});