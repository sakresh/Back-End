const express = require("express"); //Importing Expressjs through require
const dotenv = require("dotenv").config(); //dotenv for using .env file
const connectDB = require('./config/db')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000; //port number can be initialized as well as used from the .env file

connectDB()

const app = express();

app.use(express.json())  //For handling Json
app.use(express.urlencoded({extended : false})) //For handling urls

app.use("/api/goals", require("./routes/routes")); //Initial route from the routes.js file=

app.use(errorHandler)

app.listen(port, () => console.log(`Server started at port number ${port}`)); //Listens to the specified port number from the server
