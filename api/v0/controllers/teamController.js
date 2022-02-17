'use strict'

const Person = require('../../models/playerModel')

exports.get_teams = function (req, res) {
  const newActor = new Person({
    name: 'hola'
  })
  newActor.save(function (err, actor) {
    if (err) {
      res.send(err)
    } else {
      res.json(actor)
    }
  })
}

exports.create_team = function (req, res) {
  res.send({
    message: 'This is the mockup for create_team'
  })
}

exports.get_team = function (req, res) {
  res.send({
    message: 'This is the mockup for get_team'
  })
}

exports.update_team = function (req, res) {
  res.send({
    message: 'This is the mockup for update_team'
  })
}

exports.delete_team = function (req, res) {
  res.send({
    message: 'This is the mockup for delete_team'
  })
}
