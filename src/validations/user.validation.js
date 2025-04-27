const joi = require('joi')

const registerSchema = joi.object({
  name: joi.string().messages({
    'string.empty': 'Tên người dùng không được để trống'
  }),
  email: joi.string().email().messages({
    'string.email': 'Email không hợp lệ',
    'string.empty': 'Email không được để trống'
  }),
  password: joi.string().min(3).messages({
    'string.min': 'Mật khẩu phải có ít nhất 3 ký tự',
    'string.empty': 'Mật khẩu không được để trống'
  })
})

const loginSchema = joi.object({
  email: joi.string().email().messages({
    'string.email': 'Email không hợp lệ',
    'string.empty': 'Email không được để trống'
  }),
  password: joi.string().messages({
    'string.empty': 'Mật khẩu không được để trống'
  })
})

const register = async (req, res, next) => {
  try {
    await registerSchema.validateAsync(req.body)

    next()
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

const login = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body)

    next()
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

module.exports = {
  register,
  login
}
