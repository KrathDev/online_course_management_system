const courseService = require('../services/course.service')

const createCourse = async (req, res) => {
  const { title, description, thumbnailUrl, price } = req.body
  const createBy = req.user.userId
  if (!title || !description || !thumbnailUrl || !price) {
    return res.status(404).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' })
  }

  try {
    const course = await courseService.createCourse({
      title,
      description,
      thumbnailUrl,
      price,
      createBy
    })

    res.status(201).json(course)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  createCourse
}
