'use strict'

const mongoose = require('mongoose')

const PlayerResultSchema = new mongoose.Schema({
}, { strict: false })

module.exports = mongoose.model('PlayerResult', PlayerResultSchema)
