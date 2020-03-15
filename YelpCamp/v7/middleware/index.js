var Campground = require("../models/campground");
var Comment = require("../models/comment");

//all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                //does the user own the campground? 
                //foundCampground.id is a mongoose object, campground.author.id is a string, that's why we use the method .equals
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back"); //this will take the user to the previous page she was
                }
            }
        });
    //if not logged in, redirect
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                //does the user own the comment? 
                //foundCampground.id is a mongoose object, campground.author.id is a string, that's why we use the method .equals
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back"); //this will take the user to the previous page she was
                }
            }
        });
        //if not logged in, redirect
        } else {
            req.flash("error", "You need to be logged in");
            res.redirect("back");
        }
    };

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    //we use flash notification before we redirect but the message will show up in login page
    //we have to handle the flash message in the template and in the route
    req.flash("error", "You need to be logged in")
    res.redirect("/login");
};

module.exports = middlewareObj;