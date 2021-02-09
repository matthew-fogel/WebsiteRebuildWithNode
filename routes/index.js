var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Matthew Fogel, B.C.Sc.'});
});

module.exports = router;
