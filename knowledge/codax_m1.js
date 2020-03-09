const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const data = [];

var mysql = require('mysql');

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


app.post('/codax', (req, res) => {
  const result = req.body;

  if (!result) {
    return res.status(400).end();
  }

  const hora = result.hourStamp;
  const data = result.dateStamp;
  const value = result.value;
  const unit = result.unit;
  const id = result.circuitId;

  var sql = "INSERT INTO mydb.Tbl_medicoes(data, hora, valor, unidade, Tbl_circuitos_idCircuito) VALUES ('"+data+"', '"+hora+"', '"+value+"', '"+unit+"', '"+id+"');";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.send(result);

});

app.listen(9000, () => console.log('Express started at http://localhost:9000'));
