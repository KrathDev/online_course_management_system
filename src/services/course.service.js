const Course = require('../models/Course')

const createCourse = async (courseData) => {
  const course = Course(courseData)
  return await course.save()
}

module.exports = {
  createCourse
}
