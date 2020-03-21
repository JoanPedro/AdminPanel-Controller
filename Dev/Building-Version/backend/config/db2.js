const data = [];
var mysql = require('mysql');

module.exports = app => {
  var con = mysql.createConnection({
  host: "...",
  user: "...",
  password: "...",
  database: "..."
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

}
