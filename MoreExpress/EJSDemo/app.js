var express= require("express");
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs");
});

app.get("/fallinginlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "post 1", author: "susy"},
        {title: "my adorable pet bunny", author: "charlie"},
        {title: "can you believe this pomsky", author: "mar"},
    ];

    res.render("posts.ejs", {posts: posts});
});


app.listen(3000, function(){
    console.log("server is listening");
});