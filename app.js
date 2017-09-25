

var fs = require("fs");
var marketCaps = JSON.parse(fs.readFileSync("market-caps.json"));

var coinsArray = fs.readFileSync("bittrex-coins.txt").toString().split("\n");

var getMarketCapFromCoinName = function(coinName) {
  
}


coinMap = {};
coins.forEach(function(coinName) {
  coinMap['coinName'] = getMarketCapFromCoinName(coinName);
}