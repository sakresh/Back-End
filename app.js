const express = require("express")
const app = express()
const route = require("./routes/routes")

//MiddleWare
app.use(express.json())

//Routes

app.use('/api/tasks', route)

const port = 3000


app.listen(port, console.log(`Server is listening on port ${port}...`))
