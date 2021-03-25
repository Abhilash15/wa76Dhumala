var express = require('express');
var router = express.Router();
let count =0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  count +=1;
  res.send(`User access are: ${count}`);
});

module.exports = router;
