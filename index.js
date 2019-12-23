let server = require('./server')

let PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Server is up!')
})