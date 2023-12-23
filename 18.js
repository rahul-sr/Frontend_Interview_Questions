function createQuote(quote, callback) {
  var myQuote = "Like I always say, " + quote;
  callback(myQuote);
}

createQuote("eat your vegetables!", function (quote) {
  console.log(quote);
});
