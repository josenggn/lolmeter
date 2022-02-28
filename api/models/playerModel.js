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
  results: {
    type: [playerResultModel.schema],
    default: [],
    required: true
  },
  elo: {
    type: Number,
    required: true,
    default: 0
  },
  team: {
    type: Schema.Types.ObjectId,
    required: true
  },
  rol: {
    type: String,
    enum: ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT']
  }
}, { strict: false })

PlayerSchema.pre('updateOne', async function (next) {
  const playerToUpdate = await this.model.findOne(this.getQuery())
  const oldElo = playerToUpdate.elo

  const playerResult = this._update.$push.results
  /**
   * Calculate and set new elo
   * this.set({ elo: newElo })
   *
   */

  next()
})

function calculateResultElo (result, player) {

}
module.exports = mongoose.model('Player', PlayerSchema)
