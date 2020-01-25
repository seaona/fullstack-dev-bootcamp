var express                 = require("express");
var mongoose                = require("mongoose");
var passport                = require("passport");
var bodyParser              = require("body-parser");
var localStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var user                    = require("./models/user");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser:true, useUnifiedTopology:true});

var app = express ();
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world", //this is going to be used to encode / decode the session
    resave: false,
    saveUninitialized: false
}));

//we need this everytime we use passport
app.use(passport.initialize());
app.use(passport.session());

//they read the session, take the data from the session that's encoded and unencoding it (deserialize), 
//then encoding it (serialize) and put it back on the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//========================================
//ROUTES
//========================================

app.get("/", function(req,res){
    res.render("home");
});

app.get("/secret", function(req,res){
    res.render("secret");
});

app.listen(3000, function(){
    console.log("Server started");
});