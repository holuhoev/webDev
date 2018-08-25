var express = require('express');
var router = express.Router();

/* GET helloworld page. */
router.get('/', function(req, res, next) {
    res.render('helloworld', { title: 'Hello, world!' });
  });

module.exports = router;