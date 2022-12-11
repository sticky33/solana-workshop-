const Quote = require('inspirational-quotes');
var cowsay = require("cowsay");

function cow(a){
    console.log(cowsay.say(a))
};

console.log(cow(Quote.getQuote({ author: false }))); 