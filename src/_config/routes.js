const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/user/routes');
const clientRoutes = require('../features/client/routes');
const serviceOrderRoutes = require('../features/service_order/routes')

module.exports = router => {
    authRoutes(router);
    userRoutes(router);
    clientRoutes(router);
    serviceOrderRoutes(router);
}