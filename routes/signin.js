const express = require('express');
const router = express.Router();

/* GET signin page. */
router.get('/', function(req, res, next) {
    res.render('signin', { title: 'SIGN IN' });
});

module.exports = router;