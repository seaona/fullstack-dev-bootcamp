var mongoose = require("mongoose");


//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//That's what we are sending out
module.exports = mongoose.model("Post", postSchema);