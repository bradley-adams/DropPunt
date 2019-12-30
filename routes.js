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

router.get('/users/:id', (req,res)=>{
  let id = req.params.id
  dbFunctions.getUser(id).then((user)=>{
    console.log(user)
    res.render('user', user)
  })
})

module.exports = router