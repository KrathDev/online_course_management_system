const User = require('../models/User')

const createUser = async (userData) => {
  const user = User(userData)
  return await user.save()
}

const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

module.exports = {
  createUser,
  getUserByEmail
}
