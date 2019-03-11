/* Dependencies */
// import passport from 'passport'

/* GET /users/register */
export function renderRegisterPage(req, res) {
    res.render('register', {
        title: 'Register'
    })
}

/* POST /users/register */
export function authorizeSignup(req, res, next) {

}
// export function authorizeSignup(req, res, next) {
//     passport.authorize('local-signup', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/users/register',
//         successFlash: 'Succesfull Authorization',
//         failureFlash: true
//     })(req, res, next)
// }

/* GET /users/login */
export function renderLoginPage(req, res) {
    res.render('login', {
        title: 'Login'
    })
}
/* POST /users/login */
export function authorizeLogin(req, res, next) {

}
// export function authorizeLogin(req, res, next) {
//     passport.authorize('local-login', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/users/login',
//         successFlash: 'Successfull Authorization',
//         failureFlash: true
//     })(req, res, next)
// }

/* GET /users/logout */
export function logout(req, res) {
    req.logout()
    res.redirect('/')
}
