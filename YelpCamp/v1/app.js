var express = require("express");
var app = express();

app.set("view engine", "ejs");

//ROTUES
app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://www.flickr.com/photos/dean_w83/17184443669/"},
        {name: "Granite Hill", image: "https://www.flickr.com/photos/spacebat/6113242565/"},
        {name: "Mountain Goat's Rest", image: "https://www.flickr.com/photos/simplypadablog/6234045383/"}
    ]
});

//STARTING THE SERVER
app.listen(3000, function(){
    console.log("YelpCamp Server has started");
});

