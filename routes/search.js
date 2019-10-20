var express = require('express');
var router = express.Router();
var request = require("request");
var config = require('../config');

var options = { method: 'POST',
  url: 'https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/10c3c99a-654e-4196-82b3-2377ba1f93e5/search',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'api.genesysappliedresearch.com',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     organizationid: config.orgId,
     'Content-Type': 'application/json' },
  body: 
   { pageSize: 5,
     pageNumber: 1,
     sortOrder: 'string',
     sortBy: 'string',
     languageCode: 'en-US',
     documentType: 'Faq' },
  json: true };

router.get('/', function(req, res, next) {
  res.render('search', { title: 'Search page' });
});

router.post('/result', function(req, res, next) {
  options.headers.token = config.token;
  options.body.query = req.body.searched;
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //console.log(body);
    for (let faq of body.results) {
      console.log(faq.faq.answer);
    }
    res.send(body.results);
  });  
});

module.exports = router;
