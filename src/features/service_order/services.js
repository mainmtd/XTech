const db = require('../../_db/models')

module.exports = {
    create: payload => db.Service_Order.create(payload),
    findServiceOrder: payload => {
        db.Service_Order.findOne({where: payload}, {
            include: {association: ['so_client', 'so_user']}
        })
    },
    findServiceOrders: () => {
        db.Service_Order.findAll({include: { association: 'so_user'}})
    }
}