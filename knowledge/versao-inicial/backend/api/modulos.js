module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const modulo = {...req.body }
        if (req.params.id) modulo.id = req.params.id

        try {
            existsOrError(modulo.potencyActive, 'Potência ativa não informada.')
            existsOrError(modulo.potencyReactive, 'Potência reativa não informada.')
            existsOrError(modulo.dimmingPower, 'Dimming não informado.')
            existsOrError(modulo.hourFromPotency, 'Hora da potência informada.')
            existsOrError(modulo.hourFromDimming, 'Hora do dimming não informado.')
            existsOrError(modulo.profileActive, 'Perfil horário não informado.')
            existsOrError(modulo.dateFromPotency, 'Data da potência não informado.')
            existsOrError(modulo.dateFromDimming, 'Data do dimming não informado.')
            existsOrError(modulo.hardwareId, 'Controladora não informada.')

        } catch (msg) {
            res.status(400).send(msg)
        }

        if (modulo.id) {
            app.db('modulos')
                .update(modulo)
                .where({ id: modulo.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('modulos')
                .insert(modulo)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('modulos')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Equipamento foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = async(req, res) => {

        app.db('modulos')
            .select('id', 'potencyActive', 'potencyReactive', 'dimmingPower', 'hourFromPotency', 'hourFromDimming',
                'profileActive', 'dateFromPotency', 'dateFromDimming', 'hardwareId')
            .then(modulo => res.json(modulo))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('modulos')
            .select('id', 'potencyActive', 'potencyReactive', 'dimmingPower', 'hourFromPotency', 'hourFromDimming',
                'profileActive', 'dateFromPotency', 'dateFromDimming', 'hardwareId')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}

/*
const axios = require('axios')

module.exports = app => {

    const servicesToll = (req, res) => {

        var obj

        try {
            console.log("'/test' call");
            axios.post('https://api.modulusone.com/oauth/token?client_id=5a37abaee82886000100868c&grant_type=password&username=ledax@hiperideal.com.br&password=123456')
                .then(response => {
                    //obj = res.data

                    console.log(response.data)
                    res.status(200).json(response.data)

                })
                .catch(err => res.send(err));

        } catch (err) {
            console.error("GG", err);
            console.log("I get error")
        }

    }


    return { servicesToll }
}


                    function DataMining() {
                        var jsonModulos = response.data

                        var dataDetails = {
                            modulosAccessToken: jsonModulos.access_token,
                            "headers": [
                                { "Content-type": "application/json" },
                                { "Authorization": "Bearer " + dataDetails.modulosAccessToken }
                            ]
                        }

                        console.log(dataDetails)
                        console.log(dataDetails.modulosAccessToken)
                        console.log(dataDetails.headers[1])
                        console.log('Oi')
                        console.log(jsonModulos.access_token)
                    }

                    DataMining()
*/