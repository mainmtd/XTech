const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/user', controllers.create),
    router.get('/v1/api/user', controllers.findUser),
    router.get('/v1/api/users', controllers.findUsers)
}