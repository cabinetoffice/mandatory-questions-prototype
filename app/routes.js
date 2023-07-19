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
    var adminRecognised = request.session.data['admin-match']

    if (matchAcct == "app"){
        response.redirect("/one-login-july23/matching-account")
    } else if (matchAcct == "admin") {
        if (adminRecognised == "returning") {
            response.redirect("/one-login-july23/admin-profile-full")
        } else {
            response.redirect("/one-login-july23/admin-profile")
        }
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
router.post('/sign-in', function(req, res){
    var migratedUser = req.session.data['migrated-user']

    if (migratedUser) {
        res.redirect("/mand-qs-july23-2/individual")
    } else {
        res.redirect("/mand-qs-july23-2/privacy-policy")
    }
})

router.post('/privacy-policy-next', function(req, res){
    var returner = req.session.data['returning-user']

    if (returner) {
        res.redirect("/mand-qs-july23-2/matching-account")
    } else {
        res.redirect("/mand-qs-july23-2/individual")
    }
})

router.post('/transfer-account-2', function(req, res){
    var transferAccount = req.session.data['transfer-account']

    if (transferAccount == "link-yes") {
        res.redirect("mand-qs-july23-2/accounts-linked")
    } else {
        res.redirect("mand-qs-july23-2/individual")
    }
})

router.post('/individual-next', function(req, res){
    var isIndividual = req.session.data['individual']

    if (isIndividual == "yes") {
        res.redirect("mand-qs-july23-2/leaving-gov")
    } else {
        res.redirect("mand-qs-july23-2/before-you-start")
    }
})

router.post('/start-questions', function(req, res){
    var name = req.session.data['organisation-name']
    var address = req.session.data['organisation-address']
    var type = req.session.data['organisation-type']

    if (name != null && address != null && type != null) {
        res.redirect("mand-qs-july23-2/funding-amount")
    } else {
        res.redirect("mand-qs-july23-2/organisation-name")
    }
})

router.post('/type-next', function(req, res){
    var type = req.session.data['organisation-type']

    if (type == "Non-limited company") {
        res.redirect("mand-qs-july23-2/funding-amount")
    } else {
        res.redirect("mand-qs-july23-2/organisation-ch-number")
    }
})

router.post('/question-summary', function(req, res){
    var chNum = req.session.data['organisation-ch-number']
    var ccNum = req.session.data['organisation-cc-number']

    if (chNum || ccNum) {
        res.redirect("mand-qs-july23-2/org-details-short")
    } else {
        res.redirect("mand-qs-july23-2/confirm-org-details")
    }
})