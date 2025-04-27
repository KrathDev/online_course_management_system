const User = require('../models/User')

const createUser = async (userData) => {
  const user = User(userData)
  return await user.save()
}

const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

const getUserById = async (userId) => {
  return await User.findById(userId).select('-password')
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
}
