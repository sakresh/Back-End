const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/goals',require('./routes/routes'))

app.listen(port, () => console.log(`Server started at port number ${port}`))