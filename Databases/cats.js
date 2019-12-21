var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//compile catSchema into a model, which has not only the data pattern but also all the methods for creating updating cats etc.
var Cat = mongoose.model("Cat", catSchema);  //this is going to make a collection called "cats": db.cats

//adding a new cat to the db
/*var george = new Cat({ //the name george doesnt impact since it's only the name of the variable ont he jjs side
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("We just saved a cat to our db");
        console.log(cat); //if we console.log george, it's not what's comming from the db, but here in js. cat is coming from  the db
    }
});*/

Cat.create({
    name: "Snow White",
    age: 12,
    temperament: "bland"
}, function(err, cat){
    if (err){
        console.log(err);
    } else{
        console.log(cat);
    }
});

//retrieve all cats from the db

Cat.find({}, function(err,cats ){
    if(err){
        console.log("Oh no, error");
        console.log(err);
    } else {
        console.log("all the cats");
        console.log(cats);
    }
});