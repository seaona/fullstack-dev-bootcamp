var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name:"Cloud's Rest", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/04/54/8e/53/shell-campground.jpg",
    description: "blah blah blah" },

    {name:"Desert Mesa", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/88/0c/77/great-campground-nice.jpg",
    description: "blah blah blah" },

    {name:"Canyon Floor", 
    image: "https://www.gore-tex.com/sites/default/files/blog_images/beach-camping.jpg",
    description: "blah blah blah" }
]

function seedDB(){
    //remove all campgrounds from the DB
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
            Comment.remove({}, function(err){
                if(err){
                    console.log(err);
                } else{
                    console.log("Removed comments");
                }
            });
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish it had internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                               
                            });
                    }
                });
            });
        }  
    });


    


    //add a few comments

};

module.exports = seedDB;