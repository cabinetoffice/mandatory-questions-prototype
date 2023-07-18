//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Mandatory questions (June 2023) routes
router.post('/start-form', function (req, res){
    var name = req.session.data['organisation-name']
    var address = req.session.data['organisation-address']
    var type = req.session.data['organisation-type']
    var loggedin = req.session.data['login-email']

    if (name != null && address != null && type != null){
        res.redirect('mand-qs-june23/funding-amount')
    } else if (loggedin) {
        res.redirect('mand-qs-june23/organisation-name')
    } else {
        res.redirect('mand-qs-june23/govuk-start')
    }
})

//One Login (July 2023) routes
router.post('/account-match', function(request, response) {

    var matchAcct = request.session.data['account-match']
    if (matchAcct == "app"){
        response.redirect("/one-login-july23/matching-account")
    } else if (matchAcct == "admin") {
        response.redirect("/one-login-july23/admin-profile")
    } else {
        response.redirect("/one-login-july23/profile")
    }
})

router.get('/continue-from-linked', function(request, response) {

    var matchAcct = request.session.data['account-match']
    if (matchAcct == "admin"){
        response.redirect("/one-login-july23/admin-profile")
    } else if (matchAcct == "error"){
        response.redirect("/one-login-july23/errorpage")
    } else {
        response.redirect("/one-login-july23/accounts-linked")
    }
})

router.post('/transfer-account', function(request, response) {

    var transferAcct = request.session.data['transfer-account']
    if (transferAcct == "link-yes"){
        response.redirect("/one-login-july23/accounts-linked")
    } else {
        response.redirect("/one-login-july23/profile")
    }
})

//Mandatory questions (July 2023) routes
router.post('/start-form-2', function (req, res){
    var name = req.session.data['organisation-name']
    var address = req.session.data['organisation-address']
    var type = req.session.data['organisation-type']
    var loggedin = req.session.data['login-email']

    if (name != null && address != null && type != null){
        res.redirect('mand-qs-july23/funding-amount')
    } else if (loggedin) {
        res.redirect('mand-qs-july23/organisation-name')
    } else {
        res.redirect('mand-qs-july23/govuk-start')
    }
})

//Mandatory questions (July 2023) routes II
router.post('/start-form-3', function (req, res){
    var name = req.session.data['organisation-name']
    var address = req.session.data['organisation-address']
    var type = req.session.data['organisation-type']
    var loggedin = req.session.data['login-email']

    if (name != null && address != null && type != null){
        res.redirect('mand-qs-july23-2/funding-amount')
    } else if (loggedin) {
        res.redirect('mand-qs-july23-2/organisation-name')
    } else {
        res.redirect('mand-qs-july23-2/govuk-start')
    }
})