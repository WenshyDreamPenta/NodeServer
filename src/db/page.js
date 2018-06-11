var db = require("./db.js");
const shortid = require("shortid");
var modelName = "Pages";

//添加新页面
exports.addPage = function(obj) {
  var id = shortid.generate();
  var pid = shortid.generate();
  var resJson = {
    id: id,
    pid: pid,
    name: obj.name,
    alias: obj.alias,
    status: "Y",
    type: obj.type,
    url: obj.url
  };
  var res = db
    .get(modelName)
    .push(resJson)
    .write();
  return resJson;
};

//删除页面
exports.delPage = function(obj) {
  var res = db
    .get(modelName)
    .remove({ pid: obj.pid })
    .write();
  return res[0];
};

//删除所有页面
exports.delPageAll = function() {
    var res = db
      .get(modelName)
      .remove({ pid: obj.pid })
      .write();
    return res[0];
  };

//查询页面
exports.querryPage = function(obj) {
  var res = db
    .get(modelName)
    .filter({ pid: obj.pid })
    .value();
  return res;
};
