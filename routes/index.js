var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res, next){
res.render('author');});

router.get('/help', function(req, res, next){
res.render('help');});

module.exports = router;
