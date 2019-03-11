#!/usr/bin/env node

/* Dependencies */
import {
    createServer
} from 'http'
import debug from 'debug'
// env
import {
    appPort,
    env
} from './config/variables'
import {
    sequelize
} from './db/models'
/* App */
import app from './config/express'

// debuggers
const debugServer = debug('app_debug:server')
const debugDB = debug('app_debug:database')

/* App Port */
const port = normalizePort(appPort)
app.set('port', port)

/* Create HTTP Server */
const server = createServer(app)

/**
 * Test sqlite connection
 * Listen on provided port, on all network interfaces.
 */
sequelize.authenticate()
    .then(() => {
        debugDB(`"${env}" database connected`)
        server.listen(port)
    })
    .catch(err => console.error(`Unable to connect to database ${err}.`))

server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
    case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
    default:
        throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'http://localhost:' + addr.port
    debugServer('Listening on ' + bind)
}
