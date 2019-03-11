/* Dependencies */
import dotenv from 'dotenv'
import Joi from 'joi'
import envSchema from '../validations/environment'
// load environment variables
dotenv.load()

// validate
const {
    error,
    value
} = Joi.validate(process.env, envSchema)
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

// export environment variables
export const env = value.NODE_ENV
// environment check
export const isProduction = value.NODE_ENV === 'production'
export const isDev = value.NODE_ENV === 'development'
// app config
export const appPort = process.env.PORT
export const appSecret = process.env.APP_SECRET
export const tokenSecret = value.TOKEN_SECRET
export const saltValue = value.SALT_VALUE
export const host = value.HOST
export const baseUrl = value.BASE_URL
// database config
export const dialect = value.DIALECT
// cors options
export const corsOptions = {
    origin: ['http://localhost:3301'],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type',
        'Accept',
        'Authorization',
        'X-Requested-With'
    ]
}
