module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const businesses = {...req.body }
        if (req.params.id) businesses.id = req.params.id

        try {
            existsOrError(businesses.name, 'Nome não informado.')
            existsOrError(businesses.userId, 'Administrador não informado.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (businesses.id) {
            app.db('business')
                .update(businesses)
                .where({ id: businesses.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('business')
                .insert(businesses)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('business')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Empresa foi encontrada.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = async(req, res) => {

        app.db('business')
            .select('id', 'name', 'userId')
            .then(businesses => res.json(businesses))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('business')
            .select('id', 'name', 'userId')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}