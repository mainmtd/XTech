const Boom = require('boom')
const Validator = require('fastest-validator');

const services = require('./services');

const v = new Validator();

module.exports = {
    create: async ctx => {
        const {request: {body}, response} = ctx
        const schema = {
            name: {max: 60, min: 1, type:'string'},
            user: {max: 60, min: 1, type:'string'},
            password: {max: 60, min: 8, type:'string'}
        }

        const errors = v.validate(body, schema);

        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const user = await services.create(body);
        response.body = user
    },

    findUsers: async ctx => {
        const {response} = ctx;

        const users = await services.findUsers();
        response.body = users;
    },
    findUser: async ctx => {
        const {request: {body} ,response} = ctx;

        const user = await services.findUser(body);
        response.body = user;
    }
}