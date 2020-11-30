const controllers = require('./controllers');

module.exports = router => {
    router.get('/v1/api/client', controllers.findClient),
    router.post('/v1/api/client', controllers.create),
    router.get('/v1/api/clients', controllers.findClients)
}