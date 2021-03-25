var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    value = Math.random();
    if(req.query.value){
        value = req.query.value;
    }
  res.send(`Math.ceil appiled to ${value} is ${Math.ceil(value)}`);
});

module.exports = router;
