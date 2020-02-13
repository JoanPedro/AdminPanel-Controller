module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const hardware = {...req.body }
        if (req.params.id) hardware.id = req.params.id

        try {
            existsOrError(hardware.area, 'Área não informada.')
            existsOrError(hardware.equipamentId, 'Equipamento não informado.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (hardware.id) {
            app.db('hardwares')
                .update(hardware)
                .where({ id: hardware.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('hardwares')
                .insert(hardware)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('hardwares')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Hardware foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = async(req, res) => {

        app.db('hardwares')
            .select('id', 'area', 'equipamentId')
            .then(hardware => res.json(hardware))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('hardwares')
            .select('id', 'area', 'equipamentId')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}