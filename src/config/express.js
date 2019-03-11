/* Dependencies */
import express from 'express'
import path from 'path'
import createError from 'http-errors'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import session from 'express-session'
import flash from 'connect-flash'
// import passport from 'passport'
import logger from 'morgan'
import exphbs from 'express-handlebars'
// hbs helpers
import {
    hbsSection,
    inlineIf
} from '../utils/template-helpers'
// env
import {
    appSecret,
    isDev,
    corsOptions
} from './variables'

/* App Routes Import */
import indexRouter from '../routes/index'
/* Middlewares */
import checkAuth from '../middlewares/checkAuth'

/* Passport Configuration Import */

/* App Instance */
const app = express()

/* View Engine Setup */
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    cache: false,
    layoutDir: 'views/layouts/',
    partialsDir: ['views/partials/'],
    helpers: {
        section: hbsSection,
        iif: inlineIf
    }
})

/* App View Engine Register */
app.set('views', path.join(__dirname, '../../views'))
app.engine('.hbs', hbs.engine)
app.set('view engine', 'hbs')

/* App Config */

// app logger
if (isDev) {
    app.use(logger('dev'))
}
// cors setup
app.options('*', cors(corsOptions))
app.use(cors(corsOptions))
// request data parsers
app.use(express.json({
    type: ['*/json', 'application/json', 'application/vnd.api+json']
}))
app.use(express.urlencoded({
    extended: false
}))

// static assets
app.use(express.static(path.join(__dirname, '../../public')))

app.use(helmet())
app.set('x-powered-by', false)
app.use(compression())
app.use(session({
    secret: appSecret,
    cookie: {
        httpOnly: true
    },
    resave: true,
    saveUninitialized: false
}))
/* Passport Setup Initialize */
// app.use(passport.initialize())
// app.use(passport.session())
app.use(flash())

// load current user info
app.use(checkAuth(app))
app.use((req, res, next) => {
    app.locals.success = 'Succesfull Login or Register? And...'
    next()
})

/* App Routes Register */
app.use(indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = isDev ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

export default app
