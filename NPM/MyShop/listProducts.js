var faker=require("faker");
console.log("WELCOME TO MY SHOP");
for(var i=0; i<10; i++){
    var randomProduct= faker.commerce.productName();
    var randomPrice= faker.commerce.price();
    console.log("product: "+randomProduct+" - price: "+ randomPrice +"€");
};