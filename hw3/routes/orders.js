var express = require('express');
var router = express.Router();


//"database" for orders
var orders = {
  "ordersData":
  [
    {
      "topping": "Cherry",
      "quantity": "40"
    },
    {
      "topping": "Plain",
      "quantity": "20"
    },
    {
      "topping": "Chocolate",
      "quantity": "16"
    }
  ]
};

/*
I GOT HELP FOR THIS:::
Date: 9/29/2019
Reference: Dylan DeGrood
Reason: I was confused becuase I thought the POST
request belonged in the hw3_js.js folder but Dylan
led me in the right direction!
*/
router.post('/', function (req,res){
  var strJSON = JSON.stringify(orders);
  res.send(strJSON);
}) 

module.exports = router;
module.exports.orders= orders;