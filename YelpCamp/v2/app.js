var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser:true, useUnifiedTopology:true});

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
    name: "Granite Hill",
    image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"
}, function(err, campground){
    if(err){
        console.log(err);
    } else{
        console.log("Newly created campground: ");
        console.log(campground);
    }
});*/


//ROUTES
app.get("/", function(req,res){
    res.render("landing");
});

//INDEX Show all campgrounds
app.get("/campgrounds", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds}); 
            //
            //to campgrounds.ejs we will pass the data from db
        }
    }); 
});

//CREATE Add new campground db
app.post("/campgrounds", function(req,res){ //restful convention. This route and the above have the same name, but they are different routes, because the above it's a get, and this is a post
    //get data from form and add to campgrounds array defined on top
    var name= req.body.name;
    var image= req.body.image;
    var newCampground= {name: name, image: image};
    
    //create a new campground and save it to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds"); //when we do a redirect, the default is redirect as a GET request
        }
    });
});

//NEW show form to create a new campground
app.get("/campgrounds/new", function(req,res){ //this is another Restful convention
    res.render("new");
    
});


//SHOW show a specific campground
app.get("/campgrounds/:id", function(req, res){ //this is for any url following campgrounds/anything. That's why we need to put it after NEw
    //find the campground with the provided id

    //render show template with that campground
    res.send("This will be the show page one day");
});

//STARTING THE SERVER
app.listen(3000, function(){
    console.log("YelpCamp Server has started");
});

//ENDING SERVER
