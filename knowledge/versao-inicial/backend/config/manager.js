module.exports = middleware_2 => {
    return (req, res, next) => {
        if (req.user.manager) {
            middleware_2(req, res, next)
        } else {
            res.status(401).send('Usuário não possui nível de acesso suficiente! [Manager]')
        }
    }
}