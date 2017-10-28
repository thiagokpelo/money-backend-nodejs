const bodyParser  = require('body-parser')
const queryParser = require('express-query-int')
const express     = require('express')
const server      = express()

const allowCors   = require('./cors')
const port        = 80

server.use( bodyParser.urlencoded({ extended: true }) )
server.use( bodyParser.json() )
server.use( allowCors )
server.use( queryParser() )

server.listen( port, () => console.log(`BACKEND is running on port ${ port }`) )

module.exports = server
