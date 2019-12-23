let express = require('express')
let server = express()
let hbs = require('express-handlebars')
let routes = require('./routes')

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

server.use('/', routes)

module.exports = server