let express = require('express')
let router = express.Router()

let dbFunctions = require('./db')

router.get('/', (req,res)=>{
  res.redirect('/users')
})

router.get('/users', (req,res)=>{
  dbFunctions.getUsers().then((users)=>{
    res.render('users', {users:users})
  })
})

module.exports = router