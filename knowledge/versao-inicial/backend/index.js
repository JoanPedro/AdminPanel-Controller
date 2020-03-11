const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')
const db2 = require('./config/db2.js')

// Mongo temporariamente desabilitado.

require('./config/mongodb')

app.db2 = db2
app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .then('./config/qlikSense.js')
    .then('./config/cimatecMqtt.js')
    .then('./config/energyMqtt.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})