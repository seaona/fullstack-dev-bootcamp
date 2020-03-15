var express = require("express");
var router = express.Router();  //we will be adding all the routes to the router, we no longer add it to the app. itself
var Campground = require("../models/campground");
var middleware = require("../middleware");

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
router.post("/", middleware.isLoggedIn, function(req,res){ //restful convention. This route and the above have the same name, but they are different routes, because the above it's a get, and this is a post
    //get data from form and add to campgrounds array defined on top
    var name= req.body.name;
    var price = req.body.price;
    var image= req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground= {name: name, price: price, image: image, description: desc, author: author};
    
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
router.get("/new", middleware.isLoggedIn, function(req,res){ //this is another Restful convention
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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req,res){
        Campground.findById(req.params.id, function(err, foundCampground){
            res.render("campgrounds/edit", {campground: foundCampground});
        });
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req,res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    //redirect somewhere (show page)
})

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    })
});

module.exports = router;