var express = require("express");
var router = express.Router();
var page = require("../db/page");
var bodyParser = require('body-parser');

router.post("/",function(req, res, next) {
  var reqJson = {
    name: req.query.name,
    alias: req.query.alias,
    type: req.query.type,
    url: req.query.url
  };
  var response = page.addPage(reqJson);
  console.log(response);
  res.end(JSON.stringify(response));
});
module.exports = router;
