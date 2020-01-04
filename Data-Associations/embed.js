var mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true, useUnifiedTopology:true});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
//we turn it into a model
var Post = mongoose.model("Post", postSchema);


//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
//we turn it into a model
var User = mongoose.model("User", userSchema);



/* var newUser = new User ({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
});

newUser.posts.push({
    title: "How to brew polyjuce potion",
    content: "Just kidding. Go to potions class"
});


newUser.save(function(err,user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
}); */

/* var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
}); */

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});