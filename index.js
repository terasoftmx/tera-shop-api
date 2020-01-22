require('dotenv').config()
const app = require('express')()
const PORT = process.env.PORT || 1337
const bodyParser = require('body-parser')
const cors = require('cors')

//const { authMiddleware } = require('./src/private/v1/middlewares/controllerMiddleware')
const routesPrivateV1 = require('./src/private/v1/routes')

app.use(bodyParser.json(), cors())

// Handler errors
// eslint-disable-next-line consistent-return
app.use((err, req, res, next) => {
  if (!err) {
    return next()
  }

  res.status(500)
  res.send('500: Internal server error')
})
// private API v1 routes
//app.use('/api/private/', authMiddleware)
app.use('/api/private/v1', routesPrivateV1)

app.listen(PORT, () => {
  console.info(`CORS-enabled web server listening on port ${PORT}`)
  console.info(`Back end app listening on port ${PORT}!`)
})

// This exports in only for can be available for tests
module.exports = app