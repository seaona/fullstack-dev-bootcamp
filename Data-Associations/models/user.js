var mongoose = require("mongoose");

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    
    ]
});
//we turn it into a model
//var User = mongoose.model("User", userSchema);

//this will send out the model, when we require this file.
module.exports= mongoose.model("User", userSchema);