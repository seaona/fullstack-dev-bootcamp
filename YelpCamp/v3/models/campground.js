var mongoose = require("mongoose");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//when we require campground modul, we will get this:
module.exports = mongoose.model("Campground", campgroundSchema);
