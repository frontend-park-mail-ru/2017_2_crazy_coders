var express = require('express');
var router = express.Router();

/* GET signin page. */
router.get('/', function(req, res, next) {
    res.render('score', { title: 'SCORE' });
});

module.exports = router;