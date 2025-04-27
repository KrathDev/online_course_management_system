const jwt = require('jsonwebtoken')

const ascessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION })
}

module.exports = {
  ascessToken
}
