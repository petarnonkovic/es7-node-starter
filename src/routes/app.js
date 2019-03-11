import express from 'express'
// import controllers
import {
    renderHomePage,
    renderDashboardPage
} from '../controllers/app'

const router = express.Router()

/* GET / */
router.get('/', renderHomePage)

/* GET /dashboard */
router.get('/dashboard', renderDashboardPage)

export default router
