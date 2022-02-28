'use strict'

const Player = require('../../models/playerModel.js')
const Result = require('../../models/playerResultModel.js')

exports.get_players = function (req, res) {
  res.send({
    message: 'This is the mockup for get_player'
  })
}

exports.create_player = function (req, res) {
  res.send({
    message: 'This is the mockup for create_player'
  })
}

exports.get_player = function (req, res) {
  res.send({
    message: 'This is the mockup for get_player'
  })
}

exports.update_player = function (req, res) {
  res.send({
    message: 'This is the mockup for update_player'
  })
}

exports.delete_player = function (req, res) {
  res.send({
    message: 'This is the mockup for delete_player'
  })
}

exports.get_elo = function (req, res) {
  res.send({
    message: 'This is the mockup for get_elo'
  })
}

exports.update_elo = function (req, res) {
  res.send({
    message: 'This is the mockup for update_elo'
  })
}

exports.get_player_results = function (req, res) {
  res.send({
    message: 'This is the mockup for get_player_results'
  })
}

exports.update_player_results = function (req, res) {
  res.send({
    message: 'This is the mockup for update_player_results'
  })
}
