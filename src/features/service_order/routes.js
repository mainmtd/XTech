const controllers = require('./controllers');

module.exports = router => {
    router.post('/v1/api/serviceorder', controllers.create),
    router.get('/v1/api/serviceorder', controllers.findServiceOrder),
    router.get('/v1/api/serviceorders', controllers.findServiceOrders)
}