var mongoose = require("mongoose");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, //it's an array of comments id. We are not embedding the comments here
            ref: "Comment" //the name of the model
        }
    ]
});

//when we require campground modul, we will get this:
module.exports = mongoose.model("Campground", campgroundSchema);
