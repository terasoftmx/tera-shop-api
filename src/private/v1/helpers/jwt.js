var jwt = require('jsonwebtoken')

const privateKey = process.env.PRIVATE_KEY

exports.token = object => {
  object.exp = Math.floor(Date.now() / 1000) + (60 * 60)

  return jwt.sign(object, privateKey, { algorithm: 'RS256'})
}
