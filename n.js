var express = require('express')
var app = express()
var { download } = require('./main')

app.get('/', function (req, res) {
  download(req, res)
})

app.listen(3000)