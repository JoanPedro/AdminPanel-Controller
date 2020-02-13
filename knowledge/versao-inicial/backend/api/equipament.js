module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const equipament = {...req.body }
        if (req.params.id) equipament.id = req.params.id

        try {
            existsOrError(equipament.name, 'Nome não informado.')
            existsOrError(equipament.department, 'Departamento não informado.')
            existsOrError(equipament.marketId, 'Loja não informada.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (equipament.id) {
            app.db('equipaments')
                .update(equipament)
                .where({ id: equipament.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('equipaments')
                .insert(equipament)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('equipaments')
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

        app.db('equipaments')
            .select('id', 'name', 'department', 'marketId')
            .then(equipament => res.json(equipament))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('equipaments')
            .select('id', 'name', 'department', 'marketId')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}