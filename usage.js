var goldrate = require('gold-prices');

// log the current price of gold
goldrate(function(err,price){
    console.log(price);
});