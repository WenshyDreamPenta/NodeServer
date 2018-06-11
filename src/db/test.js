var db = require("./db.js");
var page = require("./page");
var res = page.addPage({
  name: "string",
  alias: "1",
  type: "2",
  url: "11"
});
console.log("res", res);
var res2 = page.querryPage({ pid: "SylrL9holX" });
console.log("res2:", res2);
//page.delPage({pid:'rJeWn82jlQ'});
