//APP CONFIG
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology:true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

//we compile the schema into an object
var Blog=mongoose.model("Blog", blogSchema);



//RESTFUL ROUTES
app.get("/", function(req,res){
    res.redirect("/blogs");
})

//INDEX ROUTE
app.get("/blogs", function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        } else {
            res.render("index", {blogs: blogs});
        }
    })
});

//NEW ROUTE
app.get("/blogs/new", function(req,res){
        res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req,res){
    Blog.create(req.body.blog, function (err, newBlog){
        if(err){
            res.render("new"); //if there is an error we render the form again
        } else {
            console.log(newBlog);
        }
    });

    res.redirect("/blogs");
});

//SHOW ROUTE
app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});


app.listen(3000, function(){
    console.log("Server is running");
});