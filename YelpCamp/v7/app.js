var express = require("express"),
    app = express(),
    bodyParser=require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds")

//requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index")


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public")); //__dirname is the directory where this script lives in
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser:true, useUnifiedTopology:true});
//seedDB(); //we call the function that we export within seeds.js


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //this comes with the passport local mongoose we added to user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//we add a middleware function for passing the current user to every template
//this will run in the middle of all routes
app.use(function(req, res, next){
    res.locals.currentUser = req.user; //whatever we put on res.locals is what's available inisde the template
    next(); //in order to move on to the next function
});

//this tells the app to use the 3 routes files. 
//We first pass the common prefix to the route, so we don't have to repeat it all over the place
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

//STARTING THE SERVER
app.listen(3000, function(){
    console.log("YelpCamp Server has started");
});


