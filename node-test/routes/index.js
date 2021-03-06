var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      'userlist': docs
    });
  });;
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: "Add New User"});
});

/* POST a new user. */
router.post("/adduser", function(req, res) {
  var db = req.db;
  var userName = req.body.username;
  var userEmail = req.body.email;

  var collection = db.get('usercollection')

  collection.insert({
    "username": userName,
    "email": userEmail
  }, function(err, doc) {
    if (err) {
      res.send("Oops! Problem showed up while adding new user to the db.")
    } else {
      // forward to success page
      res.redirect("/userlist")
    }
  });
});

module.exports = router;
