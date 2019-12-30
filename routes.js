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

router.get('/users/new', (req,res)=>{
  res.render('user_form')
})

router.post('/users/create', (req,res)=>{
  let user = { name: req.body.name }
  let profile = { pic_url: req.body.pic_url }

  dbFunctions.createUser(user)
  .then(user_id => {
    profile.user_id = user_id
    dbFunctions.createProfile(profile)
    .then(profile_id=>{
      res.redirect('/users/' + user_id)
    })
  })
})

router.get('/users/:id', (req,res)=>{
  let id = req.params.id
  dbFunctions.getUserWithProfile(id).then((user)=>{
    console.log(user)
    res.render('user', user)
  })
})

module.exports = router