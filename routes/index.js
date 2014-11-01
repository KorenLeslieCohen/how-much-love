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
router.get('/shake', function(req, res) {
  res.render('shake', { title: 'Shake' });
});

/* GET survey page. */
router.get('/rate', function(req, res) {
  res.render('rate', { title: 'Rate' });
});

/* GET stats page. */
router.get('/stats', function(req, res) {
  var db = req.db;
  var stats = db.get('stats');
  var oneArr = [];
  var twoArr = [];
  var threeArr = [];
  var fourArr = [];
  var fiveArr = [];
  stats.find({},{}, function(e, docs){
    res.render('stats', { 
      title: 'Stats',
      'stats': docs,
      oneArr: oneArr, 
      twoArr: twoArr,
      threeArr: threeArr,
      fourArr: fourArr,
      fiveArr: fiveArr
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
