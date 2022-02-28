const router = require('express').Router()

router.use('', require('./teamRoutes'), require('./playerRoutes'))

module.exports = router
