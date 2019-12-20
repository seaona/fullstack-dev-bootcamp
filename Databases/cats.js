var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the db
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save();

//retrieve all cats from the db