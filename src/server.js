const express = require('express')
require('dotenv').config()
const database = require('./configs/db')

const app = express()

//Connect database
database.connect()

//Middleware
app.use(express.json())

//Routes
app.use('/api/users', require('./routes/user.route'))
app.use('/api/courses', require('./routes/course.route'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
