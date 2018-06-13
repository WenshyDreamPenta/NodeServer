var db = require("./db.js");
const shortid = require("shortid");
var modelName = "Pages";

//添加新页面
exports.add = function(obj) {
  var id = shortid.generate();
  var bid = shortid.generate(); //画板id  
  var resJson = {
    id: id,
    pid: obj.pid,
    name: obj.name,
    alias: obj.alias,
    status: "Y",
    type: obj.type,
    url: obj.url,
    bid: bid
  };
  var res = db
    .get(modelName)
    .push(resJson)
    .write();
  return resJson;
};

//删除页面
exports.delete = function(obj) {
  var res = db
    .get(modelName)
    .remove({ id: obj.id })
    .write();
  return res[0];
};

//删除所有页面
exports.delPage = function() {
  var res = db
    .get(modelName)
    .remove({ pid: obj.pid })
    .write();
  return res[0];
};

//查询页面
exports.querry = function(obj) {
  var res = db
    .get(modelName)
    .filter({ pid: obj.pid })
    .value();
  return res;
};

//查询所有页面
exports.querryAll = function() {
  var res = [...db.get(modelName).value()];
  return res;
};
