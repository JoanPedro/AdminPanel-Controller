module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.adminMaster) {
            middleware(req, res, next)
            //console.log(req.user.adminMaster)
        } else {
            res.status(401).send(req.user)
        }
    }
}