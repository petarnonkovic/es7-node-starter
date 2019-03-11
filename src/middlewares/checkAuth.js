export default function(app) {
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            console.log('user loged', req.user)
            app.locals.isAuthenticated = true
            app.locals.user = req.user
        } else {
            console.log('user not loged')
            app.locals.isAuthenticated = false
            app.locals.user = null
        }
        // add flash msg app wide
        app.locals.error = req.flash('error')
        app.locals.error_message = req.flash('error_message')
        app.locals.success = req.flash('success')

        next()
    }
}
