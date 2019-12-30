let knex = require('knex')
let config = require('./knexfile').development
let db = knex(config)


function getUsers() {
  return db('users').select()
}

function getUser(id) {
  return db('users').where('id', id).select().first()
} 

module.exports = {
  getUsers,
  getUser
} 