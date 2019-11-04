//Including package in the js file
var cats = require("cat-me");
var fakeData = require("faker");

//Using packages

console.log(cats("nyan"));

console.log(fakeData.address.zipCode());