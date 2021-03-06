var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public")); //__dirname is the directory where this script lives in
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser:true, useUnifiedTopology:true});
seedDB(); //we call the function that we export within seeds.js


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

//ROUTES
app.get("/", function(req,res){
    res.render("landing");
});

//INDEX Show all campgrounds
app.get("/campgrounds", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds}); 
            //
            //to campgrounds.ejs we will pass the data from db
        }
    }); 
});

//CREATE Add new campground db
app.post("/campgrounds", function(req,res){ //restful convention. This route and the above have the same name, but they are different routes, because the above it's a get, and this is a post
    //get data from form and add to campgrounds array defined on top
    var name= req.body.name;
    var image= req.body.image;
    var desc = req.body.description;
    var newCampground= {name: name, image: image, description: desc};
    
    //create a new campground and save it to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds"); //when we do a redirect, the default is redirect as a GET request
        }
    });
});

//NEW show form to create a new campground
app.get("/campgrounds/new", function(req,res){ //this is another Restful convention
    res.render("campgrounds/new");
    
});


//SHOW show more info about a specific campground
app.get("/campgrounds/:id", function(req, res){ //this is for any url following campgrounds/anything. That's why we need to put it after NEw
    //find the campground with the provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


//=====================================
//COMMENTS ROUTES
//=====================================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req,res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    }); 
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req,res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create a new comment and save it to the DB
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();

                    //redirect to campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });          
        }
    });
});

// ============
//AUTH ROUTES
// ============

//show register form
app.get("/register", function(req,res){
    res.render("register");
});

//handle sing up logic
app.post("/register", function(req,res){
    var newUser = new User({username:req.body.username}); 
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res, function(){
            res.redirect("/campgrounds");
        });
    });
});

//show log in form
app.get("/login", function(req,res){
    res.render("login");
});

//handling login logic
app.post("/login", passport.authenticate("local", 
{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req,res){
});

//logout route
app.get("/logout", function(req,res){
    req.logout(); //it comes from the packages we have installed
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

//STARTING THE SERVER
app.listen(3000, function(){
    console.log("YelpCamp Server has started");
});

//ENDING SERVER
