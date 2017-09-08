var express = require('express');
var router = express.Router();

/* GET signin page. */
router.get('/', function(req, res, next) {
    res.render('signin', { title: 'SIGN IN' });
});

module.exports = router;