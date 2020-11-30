const db = require('../../_db/models');

module.exports = {
    findClient: payload => db.Client.findOne({where: payload}),
    findClients: () => db.Client.findAll(),
    create: payload => db.Client.create(payload)
}