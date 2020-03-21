module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const variable = {...req.body }
        if (req.params.id) variable.id = req.params.id

        try {
            existsOrError(variable.value, 'Valor não informado.')
            existsOrError(variable.unit, 'Unidade física não informada.')
            existsOrError(variable.hourStamp, 'O pulso de hora não foi informado.')
            existsOrError(variable.dateStamp, 'O pulso de data não foi informado.')
            existsOrError(variable.hardwareId, 'Controladora não informada.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (variable.id) {
            app.db('variables')
                .update(variable)
                .where({ id: variable.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('variables')
                .insert(variable)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('variables')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Controladora foi encontrada.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = async(req, res) => {

        app.db('variables')
            .select('id', 'value', 'unit', 'hardwareId', 'hourStamp', 'dateStamp')
            .then(variable => res.json(variable))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('variables')
            .select('id', 'value', 'unit', 'hardwareId', 'hourStamp', 'dateStamp')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}