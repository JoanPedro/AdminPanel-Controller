module.exports = middleware_3 => {
    return (req, res, next) => {
        if (req.user.customer) {
            middleware_3(req, res, next)
        } else {
            res.status(401).send('Usuário não possui nível de acesso suficiente!')
        }
    }
}