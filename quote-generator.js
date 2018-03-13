

var quoteBox = document.getElementById("js-quote-box__quote");
var tweetButton = document.getElementById("js-quote-box__tweet-me");

var quotes = ['"quote 1" -author', '"quote 2" -author', '"quote 3" -author'];
var currentQuote = '"Random quote goes here" -Author';

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * (quotes.length));
    currentQuote = quotes[randomIndex];
    quoteBox.innerHTML = currentQuote;
}

function tweetQuote() {
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + encodeURI(currentQuote);
}

