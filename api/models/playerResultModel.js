'use strict'

const mongoose = require('mongoose')
const Team = require('./teamModel')

const PlayerResultSchema = new mongoose.Schema({
  enemyTeamPosition: {
    type: Number,
    required: true
  },
  kills: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  },
  deaths: {
    type: Number,
    required: true
  },
  killParticipation: {
    type: Number,
    required: true
  },
  csmin: {
    type: Number,
    required: true
  },
  dmgmin: {
    type: Number,
    required: true
  }
}, { strict: false })

module.exports = mongoose.model('PlayerResult', PlayerResultSchema)
