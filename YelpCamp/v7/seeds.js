var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name:"Cloud's Rest", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/04/54/8e/53/shell-campground.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, rutrum quis lacus interdum, blandit laoreet massa. Etiam eros lectus, gravida auctor lacus ut, vulputate convallis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porttitor purus eget magna fringilla vulputate. Nulla sollicitudin, nulla nec porttitor eleifend, erat massa porttitor lorem, rhoncus pulvinar justo augue in orci. Curabitur ac eros fringilla, eleifend tellus venenatis, sodales erat. Curabitur lectus nisl, vestibulum quis justo nec, vehicula commodo diam. Nullam a felis vitae odio luctus blandit sed in arcu. Nunc tempor suscipit ipsum aliquet tristique. Phasellus tristique eget purus non molestie. Phasellus accumsan imperdiet hendrerit. Quisque condimentum risus mi. Quisque magna justo, pharetra eu est in, rhoncus sollicitudin est. Nunc nec sagittis arcu, vel pulvinar lorem." },

    {name:"Desert Mesa", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/88/0c/77/great-campground-nice.jpg",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, rutrum quis lacus interdum, blandit laoreet massa. Etiam eros lectus, gravida auctor lacus ut, vulputate convallis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porttitor purus eget magna fringilla vulputate. Nulla sollicitudin, nulla nec porttitor eleifend, erat massa porttitor lorem, rhoncus pulvinar justo augue in orci. Curabitur ac eros fringilla, eleifend tellus venenatis, sodales erat. Curabitur lectus nisl, vestibulum quis justo nec, vehicula commodo diam. Nullam a felis vitae odio luctus blandit sed in arcu. Nunc tempor suscipit ipsum aliquet tristique. Phasellus tristique eget purus non molestie. Phasellus accumsan imperdiet hendrerit. Quisque condimentum risus mi. Quisque magna justo, pharetra eu est in, rhoncus sollicitudin est. Nunc nec sagittis arcu, vel pulvinar lorem." },

    {name:"Canyon Floor", 
    image: "https://www.gore-tex.com/sites/default/files/blog_images/beach-camping.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, rutrum quis lacus interdum, blandit laoreet massa. Etiam eros lectus, gravida auctor lacus ut, vulputate convallis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porttitor purus eget magna fringilla vulputate. Nulla sollicitudin, nulla nec porttitor eleifend, erat massa porttitor lorem, rhoncus pulvinar justo augue in orci. Curabitur ac eros fringilla, eleifend tellus venenatis, sodales erat. Curabitur lectus nisl, vestibulum quis justo nec, vehicula commodo diam. Nullam a felis vitae odio luctus blandit sed in arcu. Nunc tempor suscipit ipsum aliquet tristique. Phasellus tristique eget purus non molestie. Phasellus accumsan imperdiet hendrerit. Quisque condimentum risus mi. Quisque magna justo, pharetra eu est in, rhoncus sollicitudin est. Nunc nec sagittis arcu, vel pulvinar lorem." }
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
            /*data.forEach(function(seed){
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
            });*/
        }  
    });


    


    //add a few comments

};

module.exports = seedDB;