var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    user: String,
    password: String
});

//take the pasportLocalMongoose package and add a bunch of methods to our user Schema
userSchema.plugin(passportLocalMongoose); 

var User = mongoose.model("User", userSchema);