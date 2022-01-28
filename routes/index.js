var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {});
});

router.get('/charts', function(req, res, next) {
  res.render('charts', {});
});

router.get('/news', function(req, res, next) {
  res.render('news', {});
});


module.exports = router;
