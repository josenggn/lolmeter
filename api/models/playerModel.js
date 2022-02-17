'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const playerResultModel = require('./playerResultModel')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
  results: [playerResultModel],
  elo: {
    type: Number,
    required: true,
    default: 0
  },
  team: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, { strict: false })

PlayerSchema.pre('updateOne', function (next) {
  const updatedPlayer = this

  updatedPlayer.elo += updatedPlayer.results[updatedPlayer.results.length - 1].resultElo
  next()
})

module.exports = mongoose.model('Player', PlayerSchema)
