const Boom = require('boom');

const Validator = require('fastest-validator');
const services = require('./services');

const v = new Validator();

module.exports = {
    create: async ctx => {
        const {request: {body}, response} = ctx;
        const schema = {
            equipment: {max: 60, min: 1, type:'string'},
            requestedService: {max: 150, min: 1, type: 'string'},
            estimatedCost: {positive: true, type: 'number'}
        }

        const errors = v.validate(body, schema);

        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const serviceOrder = await services.create(body);
        response.body = serviceOrder;
    },
    findServiceOrder: async ctx => {
        const {request: {body}, response} = ctx;
        
        const serviceOrder = await services.findServiceOrder(body);
        response.body = serviceOrder;
    },
    findServiceOrders: async ctx => {
        const {response} = ctx;
        
        const serviceOrders = await services.findServiceOrders();
        console.log(serviceOrders);
        response.body = serviceOrders;
    }
}