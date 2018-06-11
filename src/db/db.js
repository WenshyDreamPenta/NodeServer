const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({
  Projects: [],
  Broads: [],
  Components: [],
  Globals: [],
  Layouts: [],
  Pages: []
}).write();

module.exports = db;
