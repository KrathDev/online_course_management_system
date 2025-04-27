const userService = require('../services/user.service')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(404).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' })
  }

  try {
    const existingUser = await userService.getUserByEmail(email)
    if (existingUser) {
      return res.status(409).json({ message: 'Email đã tồn tại!' })
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const user = await userService.createUser({ name, email, password: hashPassword })

    res.status(201).json({ message: 'Đăng kí thành công' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(404).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' })
  }

  try {
    const user = await userService.getUserByEmail(email)
    if (!user) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác' })
    }

    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác' })
    }

    const token = generateToken.ascessToken({ userId: user._id, role: user.role })

    res.status(200).json({
      message: 'Đăng nhập thành công',
      token
    })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const getProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.userId)
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' })
    }

    res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  register,
  login,
  getProfile
}
