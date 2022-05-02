var admin = require("firebase-admin");

var serviceAccount = require("/Users/nicholasjoudrey/firestore/budget-a5c27-firebase-adminsdk-mt5q8-dcad41886c");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();