var express = require("express");
//everywhere where we use express, we will write "app. something"
var app= express();

//3 different ROUTES

// "/" => "Hi there!!"
app.get("/", function(req,res){
    res.send("hi there dgdsfg");
});
// "/bye" => "Goodbye"
app.get("/bye", function(req,res){
    res.send("goodbye");
});
// "/dog" => "MEOW"
app.get("/dog", function(req,res){
    console.log("someone made a request")
    res.send("meow I've changed something fgd");
});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to "+ subreddit.toUpperCase() + " Subreddit");

});

app.get("/r/:subreddit/comments/:id/:title", function(req,res){
    res.send("welcome to post xxx");
});

app.get("*", function(req,res){
    res.send("you are a star");
});

//tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("server has started");
});