const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async(req, res) => {
        const worker = {...req.body }
        if (req.params.id) worker.id = req.params.id

        try {
            existsOrError(worker.name, 'Nome do Funcionário não informado.')
            existsOrError(worker.email, 'E-mail do Funcionário não informado.')
            existsOrError(worker.password, 'Senha do Funcionário não informada.')
            existsOrError(worker.confirmPassword, 'Confirmação de senha inválida!')
            equalsOrError(worker.password, worker.confirmPassword,
                'Senhas não conferem')
            existsOrError(worker.businessId, 'Empresa-Mãe não informada. ')

            const workerFromDB = await app.db('workers')
                .where({ email: worker.email }).first()
            if (!worker.id) {
                notExistsOrError(workerFromDB, 'Funcionário já cadastrado!')
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        worker.password = encryptPassword(worker.password)
        delete worker.confirmPassword

        if (worker.id) {
            app.db('workers')
                .update(worker)
                .where({ id: worker.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('workers')
                .insert(worker)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('workers')
            .select('id', 'name', 'email', 'password', 'adminBusiness', 'adminMarket', 'adminNone', 'businessId')
            .then(workers => res.json(workers))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('workers')
            .select('id', 'name', 'email', 'password', 'adminBusiness', 'adminMarket', 'adminNone', 'businessId')
            .where({ id: req.params.id })
            .first()
            .then(worker => res.json(worker))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('workers')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Funcionário foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}