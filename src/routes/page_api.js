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
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/**
 * POST方法
 * 添加新页面
 */
router.post("/add", function(req, res, next) {
  var reqJson = {
    pid:req.body.pid,
    name: req.body.name,
    alias: req.body.alias,
    type: req.body.type,
    url: req.body.url
  };
  var response = page.add(reqJson);
  console.log(response);
  res.end(JSON.stringify(response));
});

/**
 * GET方法
 * 获取所有新页面
 */
router.post("/queryAll", function(req, res, next) {
  var response = page.querryAll();
  console.log(response);
  res.end(JSON.stringify(response));
});

/**
 * POST方法
 * 删除置顶pid页面
 */
router.post("/delete", function(req, res, next) {
  var reqJson = {
    id: req.body.id
  };
  var response = page.delete(reqJson);
  console.log(response);
  res.end(JSON.stringify(response));
});


module.exports = router;
