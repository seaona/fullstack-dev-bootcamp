var express = require("express");
var router = express.Router();  //we will be adding all the routes to the router, we no longer add it to the app. itself
var Campground = require("../models/campground");

//INDEX Show all campgrounds
router.get("/", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds}); 
            //
            //to campgrounds.ejs we will pass the data from db
        }
    }); 
});

//CREATE Add new campground db
router.post("/s", function(req,res){ //restful convention. This route and the above have the same name, but they are different routes, because the above it's a get, and this is a post
    //get data from form and add to campgrounds array defined on top
    var name= req.body.name;
    var image= req.body.image;
    var desc = req.body.description;
    var newCampground= {name: name, image: image, description: desc};
    
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
router.get("/new", function(req,res){ //this is another Restful convention
    res.render("campgrounds/new");
    
});


//SHOW show more info about a specific campground
router.get("/:id", function(req, res){ //this is for any url following campgrounds/anything. That's why we need to put it after NEw
    //find the campground with the provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


module.exports = router;