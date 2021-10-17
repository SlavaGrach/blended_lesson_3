const express = require("express")
const dotenv = require("dotenv")
const logger = require("./midlewares/logger")
const connectDB = require("./config/db")
dotenv.config({ path: "./config/config.env" })

const { PORT, NODE_ENV, MONGODB_URI } = process.env

//connect to database
connectDB(MONGODB_URI)

const app = express()

//load ENV variables

// console.log(NODE_ENV)

//logging midleware
if (NODE_ENV === "development") {
  // setup the logger
  app.use(logger())
}

app.get("/", (req, res, next) => {
  res.send("Home page")
})

app.get("/about", (req, res, next) => {
  res.send("About page")
})

const server = app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT} in ${NODE_ENV} mode`)
})

process.on("unhandledRejection", (error, promisse) => {
  if (error) {
    console.log(`Error: ${error.message}`)
    server.close(() => {
      return process.exit(1)
    })
  }
})
