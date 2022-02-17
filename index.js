const app = require('./app.js')
const mongoose = require('mongoose')

const port = process.env.PORT || 8080

const mongoDBHostname = process.env.mongoDBHostname || 'localhost'
const mongoDBPort = process.env.mongoDBPort || '27017'
const mongoDBName = process.env.mongoDBName || 'lolmeter'
const mongoDBURI = 'mongodb://' + mongoDBHostname + ':' + mongoDBPort + '/' + mongoDBName

mongoose.connect(mongoDBURI)
console.log('Connecting DB to: ' + mongoDBURI)

mongoose.connection.on('open', function () {
  app.listen(port, function () {
    console.log('LOLMETER RESTful API server started on: ' + port)
  })
})

mongoose.connection.on('error', function (err) {
  console.error('DB init error ' + err)
})
