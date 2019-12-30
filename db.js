let knex = require('knex')
let config = require('./knexfile').development
let db = knex(config)


function getUsers() {
  return db('users').select()
}

function getUser(id) {
  return db('users').where('id', id).select().first()
}

function getUserWithProfile(id) {
  return db('users').where('users.id', id)
  .join('profiles', 'users.id', 'profiles.user_id')
  .select().first()
}

function createUser(user) {
  return db('users').insert(user)
  .then(user_ids =>{
    return user_ids[0]
  })
}

function createProfile(profile) {
  return db('profiles').insert(profile)
  .then(profile_ids =>{
    return profile_ids[0]
  })
}


module.exports = {
  getUsers,
  getUser,
  getUserWithProfile,
  createUser,
  createProfile
}