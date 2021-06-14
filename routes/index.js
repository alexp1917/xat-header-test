var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test-header', (r, s, n) => {
  s.send('you sent header ' +
    r.get('x_access_token'));
});

module.exports = router;
