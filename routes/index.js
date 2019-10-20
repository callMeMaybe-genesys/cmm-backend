var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyBkNy0ys7beRljZQImYHF3CaHM3j1lLXtM",
  authDomain: "callmemaybe-at-genesys-hack.firebaseapp.com",
  databaseURL: "https://callmemaybe-at-genesys-hack.firebaseio.com",
  projectId: "callmemaybe-at-genesys-hack",
  storageBucket: "callmemaybe-at-genesys-hack.appspot.com",
  messagingSenderId: "105991971063",
  appId: "1:105991971063:web:0ff73b94e8e3fb04faf3f2"
}
firebase.initializeApp(firebaseConfig);
var updateRef = firebase.database().ref('update');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  updateRef.set({imageurl: req.query});
  res.render('index', { title: 'Express' });
});

module.exports = router;
