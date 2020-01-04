var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology:true});

//We reference the models from the other files. To reference the current directory we use ./

var Post = require("./models/post");
var User = require("./models/user");




Post.create({
    title: "How to cook part 4",
    content: "LDFKGJSDFLÑG"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});



//Find user
//Find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });




/*User.create({
    email: "bob@gmail.com",
    name: "Bob Belcher"
});*/