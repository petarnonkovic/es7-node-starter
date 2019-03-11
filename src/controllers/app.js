/* GET / */
export function renderHomePage(req, res) {
    res.render('index', {
        title: 'Home'
    })
}
/* GET /dashboard */
export function renderDashboardPage(req, res) {
    if (req.user) {
        res.locals.user = req.user
    }
    res.render('dashboard', {
        title: 'Dashboard'
    })
}
