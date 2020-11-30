const Boom = require('boom');
const Validator = require('fastest-validator');

const services = require('./services');

const v = new Validator();

module.exports = {
    findClient: async ctx => {
        const { request: {body}, response } = ctx;

        const client = services.findClient(body);
        response.body = client;
    },
    findClients: async ctx => {
        const { response } = ctx;

        const clients = services.findClients();

        response.body = clients; 
    },
    create: async ctx => {
        const {request: {body}, response} = ctx;

        const schema = {
            name: {max: 60, min: 1, type:'string'},
            email: {max: 60, min: 1, type:'string'}
        }

        const errors = v.validate(body, schema);

        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const client = await services.create(body);

        response.body = client;
    }
}