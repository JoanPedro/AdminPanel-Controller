var mysql = require('mysql');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
    const codax = {...req.body }
    if (req.params.id) circuitId.id = req.params.id

    try {
        existsOrError(codax.hourStamp, 'Hora não informada.')
        existsOrError(codax.dateStamp, 'Data não informada.')
        existsOrError(codax.value, 'Valor não informado.')
        existsOrError(codax.unit, 'Unidade não informada.')
        existsOrError(codax.circuitId, 'Id do circuito não informado.')
    } catch (msg) {
        res.status(400).send(msg)
    }

    const con = mysql.createConnection({
        host: "codax.c8rmjbl8lqg6.us-west-2.rds.amazonaws.com",
        user: "codax",
        password: "codax2020",
        database: "innodb"
    })
      
    var sql = "INSERT INTO mydb.Tbl_medicoes(data, hora, valor, unidade, Tbl_circuitos_idCircuito) VALUES ('"+codax.dateStamp+"', '"+codax.hourStamp+"', '"+codax.value+"', '"+codax.unit+"', '"+codax.circuitId+"');"
    
    con.connect(e => {
        if (e) throw e;
        console.log("Connected!");
        con.query(sql, (e, result) => {
            if (e) throw e;
            console.log(`1 record inserted: ${result}`)
        })
    });
    res.send(codax)   
    }
    
    return { save } 
}