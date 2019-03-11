const Joi = require('joi')

/* project environment schema */
const envSchema = Joi.object({
    SALT_VALUE: Joi.number().default(10),
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test'])
        .default('development'),
    PORT: Joi.number().default(8080),
    HOST: Joi.string().default('localhost'),
    APP_BASE_URL: Joi.string(),
    APP_SECRET: Joi.string(),

    DIALECT: Joi.string()
        .allow(['mysql', 'postgres', 'sqlite', 'mssql'])
        .default('sqlite'),
    TOKEN_SECRET: Joi.string()
})
    .unknown()
    .required()

export default envSchema
