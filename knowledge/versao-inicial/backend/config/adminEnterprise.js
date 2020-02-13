module.exports = middleware_1 => {
    return (req, res, next) => {
        if (req.user.adminEnterprise) {
            middleware_1(req, res, next)
        } else {
            res.status(401).send('Usuário não possui nível de acesso suficiente! [Admin Enterprise]')
        }
    }
}