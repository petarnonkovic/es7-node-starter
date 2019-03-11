import Joi from 'joi'

export default {
    // POST /users/login
    login: {
        body: {
            indetifier: Joi.string().min(3).max(20).required(),
            password: Joi.string().min(6).max(20).required()
        }
    },

    // GET /auth/:indetifier
    indetifier: {
        params: {
            indetifier: Joi.string().required()
        }
    },

    // POST /users/register
    register: {
        body: {
            username: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(30).required()
        }
    }
}
