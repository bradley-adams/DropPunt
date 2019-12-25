let knex = require('knex')
let config = require('./knexfile').development
let db = knex(config)


function getUsers() {
  return db('users').select()
}


module.exports = {
  getUsers
} 