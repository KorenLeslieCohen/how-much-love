var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

/* GET survey page. */
router.get('/survey', function(req, res) {
  res.render('survey', { title: 'Survey' });
});

/* GET stats page. */
router.get('/stats', function(req, res) {
  res.render('stats', { title: 'Stats' });
});

module.exports = router;
