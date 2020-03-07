var express = require("express");
var router = express.Router({mergeParams: true}); //it will merge the params from the campground with the comments together
var Campground = require("../models/campground");
var Comment = require("../models/comment");


//Comments New
router.get("/new", isLoggedIn, function(req,res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    }); 
});


//Comments Create
router.post("/", isLoggedIn, function(req,res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create a new comment and save it to the DB
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();

                    //redirect to campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });          
        }
    });
});

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;