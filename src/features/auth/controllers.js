const services = require('./services')
const Boom = require('boom')
const Validator = require('fastest-validator')
const jwt = require('jsonwebtoken')

const v = new Validator();

module.exports = {
    auth: async ctx => {
        const { request: {body}, response } = ctx

        const schema = {
            user: {max: 60, min: 1, type:'string'},
            password: {max: 60, min: 8, type:'string'}
        }

        const errors = v.validate(body, schema);

        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const user = await services.auth(body)
        console.log(user)
        if(user){
            response.body = {
                result: jwt.sign({username: user.user}, 'meusegredo')
            }           
        }else {
            response.status = 400
            response.body = {result: Boom.unauthorized()}
        }
    }
}