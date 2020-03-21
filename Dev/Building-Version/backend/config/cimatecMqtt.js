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
    port: 10538,
    host: 'mqtt:/m10.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'flibfowb',
    password: 'OEF9zrNlJHns',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
const client = mqtt.connect('mqtt://m10.cloudmqtt.com', credentials)

var infos = ''
var connected = false

client.on('connect', () => {
  client.subscribe('Ledax')
  client.subscribe('Ledax_2')
  console.log('Connected to broker - Cimatec Mqtt')
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'Ledax':
      return GatewayToInterface(message)
    case 'Ledax_2':
      return InterfaceToGateway(message)
  }
  //console.log('No handler for topic %s', topic)
})

function GatewayToInterface (message) {
  //console.log('Received from Gateway %s', message)
  const payload = JSON.parse(message);
  if(payload.msg_type == "Medida"){
    var time = payload.timestamp
    var data = time.substring(0,10)
    var hora = time.substring(11,19)
    var id = (payload.id_controler+53)
    var valores = payload.valores
    for(var i = 0; i < 8; i++){
        var valor = valores[i].valor
        var unidade = valores[i].unidade
        var sql = "INSERT INTO mydb.Tbl_medicoes(data, hora, valor, unidade, Tbl_circuitos_idCircuito) VALUES ('"+data+"', '"+hora+"', '"+valor+"', '"+unidade+"', '"+id+"');";
         con.query(sql, function (err, result) {
         if (err) throw err;
         //console.log("1 record inserted");
       });
    }
  }

  connected = (message.toString() === 'true')
}

function InterfaceToGateway (message) {
  infos = message
  //console.log('Received from Interface %s', message)
}