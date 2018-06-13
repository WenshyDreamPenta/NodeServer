/**
 * Page（新页面）相关
 */

var express = require("express");
var router = express.Router();
var page = require("../db/page");
var bodyParser = require("body-parser");

//设置跨域访问
router.all("*", function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.post("/addPage", function(req, res, next) {
  var reqJson = {
    name: req.body.name,
    alias: req.body.alias,
    type: req.body.type,
    url: req.body.url
  };
  var response = page.addPage(reqJson);
  console.log(response);
  res.end(JSON.stringify(response));
});

router.get("/queryAll", function(req, res, next) {
  var response = page.querryAllPages();
  console.log(response);
  res.end(JSON.stringify(response));
});

router.post("/delPage", function(req, res, next) {
  var reqJson = {
    pid: req.body.pid
  };
  var response = page.delPage(reqJson);
  console.log(response);
  res.end(JSON.stringify(response));
});


module.exports = router;
