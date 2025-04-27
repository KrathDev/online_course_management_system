const jwt = require('jsonwebtoken')

const isUser = async (req, res, next) => {
  const authorization = req.headers['authorization']
  if (!authorization) {
    return res.status(401).json({ message: 'Token không tồn tại' })
  }
  const token = authorization.split(' ')[1]
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: decode.userId }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token không hợp lệ!' })
  }
}

module.exports = {
  isUser
}
