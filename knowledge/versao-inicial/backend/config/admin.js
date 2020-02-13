module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.adminMaster) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não possui nível de acesso suficiente! [Admin Master]')
        }
    }
}