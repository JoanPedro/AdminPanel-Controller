module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const market = {...req.body }
        if (req.params.id) market.id = req.params.id

        try {
            existsOrError(market.name, 'Nome não informado.')
            existsOrError(market.locale, 'Localidade não informada.')
            existsOrError(market.businessId, 'Empresa não informada.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (market.id) {
            app.db('markets')
                .update(market)
                .where({ id: market.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('markets')
                .insert(market)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('markets')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Loja foi encontrada.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = async(req, res) => {

        app.db('markets')
            .select('id', 'name', 'locale', 'businessId')
            .then(market => res.json(market))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('markets')
            .select('id', 'name', 'locale', 'businessId')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}