// updated controller.js
const mqtt = require('mqtt')
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "codax.c8rmjbl8lqg6.us-west-2.rds.amazonaws.com",
    user: "codax",
    password: "codax2020",
    database: "mydb"
  });

con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
  });

var credentials = {
    port: 10737,
    host: 'mqtt:/soldier.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'ueeswiqv',
    password: 'ramEh1MZ4mVV',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
const client2 = mqtt.connect('mqtt://soldier.cloudmqtt.com', credentials)

var infos = ''
var connected = false

client2.on('connect', () => {
  client2.subscribe('receiver')
  console.log('Connected to broker - Energy Mqtt')
})

client2.on('message', (topic, message) => {
  switch (topic) {
    case 'receiver':
      return Main(message)
  }
  //console.log('No handler for topic %s', topic)
})

function Main (message) {
  //console.log('Received from Gateway %s', message)
  const payload = JSON.parse(message);

  var data = payload.dateStamp
  var hora = payload.hourStamp
  var value = payload.value
  var unit = payload.unit
  var id = payload.circuitId
  
  var sql = "INSERT INTO mydb.Tbl_medicoes(data, hora, valor, unidade, Tbl_circuitos_idCircuito) VALUES ('"+data+"', '"+hora+"', '"+value+"', '"+unit+"', '"+id+"');";

 con.query(sql, function (err, result) {
     if (err) throw err;
     //console.log("1 record inserted");
   });

  connected = (message.toString() === 'true')
}

//function InterfaceToGateway (message) {
  //infos = message
  //console.log('Received from Interface %s', infos)
//}