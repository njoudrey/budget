var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("/Users/nicholasjoudrey/firestore/budget-a5c27-firebase-adminsdk-mt5q8-dcad41886c");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


/* POST transaction entry. */
router.post('/', (req, res) => {
  db.collection('transactions').doc('nick').set(req.body);
  res.send('got transaction POST request');
});

module.exports = router;
