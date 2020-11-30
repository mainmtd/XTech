const db = require('../../_db/models')

module.exports = {
    create: payload => db.User.create(payload),
    findUser: payload => db.User.findOne({where: payload}),
    findUsers: () => db.User.findAll()
}