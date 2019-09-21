var express = require('express');
var router = express.Router();


//"database" for orders
router.get('/', function(req, res, next) {
    var json1= {topping:"cherry",quantity: "2"};
    var json2= {topping:"plain",quantity: "6"};
    var json3= {topping:"chocolate",quantity: "1"};
    var json=[json1,json2,json3];
  res.send(json);
});

module.exports = router;
