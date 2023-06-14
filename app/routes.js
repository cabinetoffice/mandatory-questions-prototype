//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/start-form', function (req, res){
    var name = req.session.data['organisation-name']
    var address = req.session.data['organisation-address']
    var type = req.session.data['organisation-type']
    var loggedin = req.session.data['login-email']

    if (name != null && address != null && type != null){
        res.redirect('/funding-amount')
    } else if (loggedin) {
        res.redirect('organisation-name')
    } else {
        res.redirect('govuk-start')
    }
})