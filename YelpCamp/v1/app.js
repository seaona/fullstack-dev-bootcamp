var express = require("express");
var app = express();
var bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
    {name: "Salmon Creek", image: "https://r-cf.bstatic.com/images/hotel/max1024x768/118/118330119.jpg"},
    {name: "Granite Hill", image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"},
    {name: "Mountain Goat's Rest", image: "https://media.wired.com/photos/599b4cfd4fa6fc733c11e30d/master/pass/iStock-820873602.jpg"}
];

//ROTUES
app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds}); //to campgrounds.ejs we will pass the object campgrounds with the data
});

app.post("/campgrounds", function(req,res){ //restful convention. This route and the above have the same name, but they are different routes, because the above it's a get, and this is a post
    //get data from form and add to campgrounds array
    var name= req.body.name;
    var image= req.body.image;
    var newCampground= {name: name, image: image};
    campgrounds.push(newCampground);

    //redirect back to campgrounds page
    res.redirect("/campgrounds"); //when we do a redirect, the default is redirect as a GET request
});

app.get("/campgrounds/new", function(req,res){ //this is another Restful convention
    res.render("new");
});

//STARTING THE SERVER
app.listen(3000, function(){
    console.log("YelpCamp Server has started");
});

