var express                 = require("express");
var mongoose                = require("mongoose");
var passport                = require("passport");
var bodyParser              = require("body-parser");
var LocalStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var User                    = require("./models/user");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser:true, useUnifiedTopology:true});

var app = express ();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world", //this is going to be used to encode / decode the session
    resave: false,
    saveUninitialized: false
}));

//we need this everytime we use passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
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

//when a request comes in, is going to run isLoggedIn before anything else
app.get("/secret", isLoggedIn, function(req,res){
    res.render("secret");
});

//Auth Routes
//show sign up form
app.get("/register", function(req,res){
    res.render("register");
});

//handling user sign up
app.post("/register", function(req,res){
    //we create the user with only the username. We don't save the password on the database
    //we pass the password as a second argument and user.register will take it and hash the password, to store it on the db
    User.register(new User({username:req.body.username}), req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        //this will log the user in and run the serialized User render
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secret");
        });
        
    });

});

//Log in Routes
//render log in form
app.get("/login", function(req,res){
    res.render("login");
});

//login logic
//middleware: we run some code before the callback. It's between the begining of the route and the callback
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res){ 
});

//logout: passport is destroying all the user data from the session
app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

//this is a standard for the middleware. Next, is the next thing it needs to be called
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

app.listen(3000, function(){
    console.log("Server started");
});