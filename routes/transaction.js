var express = require('express');
var router = express.Router();

var db = require('../database');


/* POST transaction entry. */
router.post('/', (req, res) => {
  db.collection('users').doc('nick').collection('transactions').doc().set(req.body);
  res.render('index', { title: 'Budget', transtat: 'Transaction submitted successfully' });
});

module.exports = router;
