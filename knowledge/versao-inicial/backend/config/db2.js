const data = [];
var mysql = require('mysql');

module.exports = app => {
  var con = mysql.createConnection({
  host: "codax.c8rmjbl8lqg6.us-west-2.rds.amazonaws.com",
  user: "codax",
  password: "codax2020",
  database: "innodb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

}
