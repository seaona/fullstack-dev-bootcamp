//adding express framework
var express = require("express");
var app = express();

//initial page
app.get("/", function(req,res){
    res.send("hi there, welcome to my assignment");
});


//animals pages
app.get("/speak/:animal", function(req,res){
    //dictionary
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    };
    var animal = req.params.animal.toLowerCase(); //we want to take both Dog and dog
    var sound = sounds[animal];

    res.send("The " + animal + " says " + sound);  
});

//repeating params
app.get("/repeat/:word/:times", function(req,res){
    var word = req.params.word;
    var times = Number(req.params.times); //we transform a string to a number
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