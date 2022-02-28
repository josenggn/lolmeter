const router = require('express').Router()

router.use('/v0', require('./v0/routes'))

module.exports = router
