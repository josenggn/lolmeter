'use strict'

const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  wins: {
    type: Number,
    required: true,
    min: 0
  },
  losses: {
    type: Number,
    required: true,
    min: 0
  },
  position: {
    type: Number,
    required: true
  }
}, { strict: false })

module.exports = mongoose.model('Team', TeamSchema)
