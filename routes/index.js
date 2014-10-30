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
  var db = req.db;
  var stats = db.get('stats');
  stats.find({},{}, function(e, docs){
    res.render('stats', { 
      title: 'Stats',
      'stats': docs 
    });
  });
});

/* POST stats page. */
router.post('/addstats', function(req, res) {
  var db = req.db;
  var num = req.body.number;
  var stats = db.get('stats');
  stats.insert({
    'number' : num
  }, function (error, doc) {
    if (error) {
      res.send("Could not add stats.");
    } else {
      res.location('stats');
      res.redirect('stats');
    }
  });
});

module.exports = router;
