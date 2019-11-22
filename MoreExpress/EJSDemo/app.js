var express= require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/fallinginlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "post 1", author: "susy"},
        {title: "my adorable pet bunny", author: "charlie"},
        {title: "can you believe this pomsky", author: "mar"},
    ];

    res.render("posts", {posts: posts});
});


app.listen(3000, function(){
    console.log("server is listening");
});