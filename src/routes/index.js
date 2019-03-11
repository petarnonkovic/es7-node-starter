/* Dependencies */
import express from 'express'
// import routers
import appRouter from './app'
import authRouter from './users'

const router = express.Router()

// register routers
router.use('/', appRouter)
router.use('/users', authRouter)

export default router
