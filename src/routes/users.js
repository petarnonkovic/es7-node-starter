/* Dependencies */
import express from 'express'
// import controllers
import {
    renderRegisterPage,
    renderLoginPage,
    logout,
    authorizeSignup,
    authorizeLogin
} from '../controllers/users'
const router = express.Router()

/* GET /users/register */
router.get('/register', renderRegisterPage)

/* POST /users/register */
router.post('/register', authorizeSignup)

/* GET /users/login */
router.get('/login', renderLoginPage)

/* POST /users/login */
router.post('/login', authorizeLogin)

/* GET /users/logout */
router.get('/logout', logout)

export default router
