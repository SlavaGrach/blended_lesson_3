const fs = require("fs")
const path = require("path")
const morgan = require("morgan")

const logger = () => {
  const logFilePath = path.join(__dirname, "..", "log", "server.log")
  const accessLogStream = fs.createWriteStream(logFilePath, { flags: "a" })
  return morgan("combined", { stream: accessLogStream })
  //   console.log(path.join(__dirname, "..", "log", "server.log"))
}

module.exports = logger
