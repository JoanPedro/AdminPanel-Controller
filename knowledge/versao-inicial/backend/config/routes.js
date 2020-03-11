const adminMaster = require('./admin')
const adminEnterprise = require('./adminEnterprise')
const manager = require('./manager')
const customer = require('./customer')

const axios = require('axios')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    app.put('/users/:id', app.api.user.save)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.user.save))
        .get(adminMaster(app.api.user.get))

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(adminMaster(app.api.user.save))
        .get(adminMaster(app.api.user.getById))
        .delete(adminMaster(app.api.user.remove))
    
    app.route('/codax')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.codax.save))

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)

    app.route('/businesses')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.business.save))
        .get(adminMaster(app.api.business.get))

    app.route('/businesses/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.business.getById)
        .put(adminMaster(app.api.business.save))
        .delete(adminMaster(app.api.business.remove))

    app.route('/markets')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.market.save))
        .get(adminMaster(app.api.market.get))

    app.route('/markets/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.market.getById)
        .put(adminMaster(app.api.market.save))
        .delete(adminMaster(app.api.market.remove))

    app.route('/workers')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.worker.save))
        .get(adminMaster(app.api.worker.get))

    app.route('/workers/:id')
        .all(app.config.passport.authenticate())
        .put(adminMaster(app.api.worker.save))
        .get(adminMaster(app.api.worker.getById))
        .delete(adminMaster(app.api.worker.remove))

    app.route('/equipaments')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.equipament.save))
        .get(adminMaster(app.api.equipament.get))

    app.route('/equipaments/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.equipament.getById)
        .put(adminMaster(app.api.equipament.save))
        .delete(adminMaster(app.api.equipament.remove))

    app.route('/hardwares')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.hardware.save))
        .get(adminMaster(app.api.hardware.get))

    app.route('/hardwares/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.hardware.getById)
        .put(adminMaster(app.api.hardware.save))
        .delete(adminMaster(app.api.hardware.remove))

    app.route('/modulos')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.modulos.save))
        .get(adminMaster(app.api.modulos.get))

    app.route('/modulos/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.modulos.getById)
        .put(adminMaster(app.api.modulos.save))
        .delete(adminMaster(app.api.modulos.remove))

    app.route('/variables')
        .all(app.config.passport.authenticate())
        .post(adminMaster(app.api.variable.save))
        .get(adminMaster(app.api.variable.get))

    app.route('/variables/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.variable.getById)
        .put(adminMaster(app.api.variable.save))
        .delete(adminMaster(app.api.variable.remove))

}

/*

(req, res) => {

        try {
            console.log("'/test' call");
            axios.post('https://api.modulusone.com/oauth/token?client_id=5a37abaee82886000100868c&grant_type=password&username=ledax@hiperideal.com.br&password=123456')
                .then(res => {
                    console.log(res.data)
                    res.status(200).json(res.data)
                })
                .catch(err => res.send(err));
            console.log("I pass")
        } catch (err) {
            console.error("GG", err);
            console.log("I get error")
        }
    })

*/