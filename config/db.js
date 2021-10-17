const { connect } = require("mongoose")

const connectDB = async (MONGODB_URI) => {
  const DB = await connect(MONGODB_URI)
  console.log(
    `MongoDB connected ${DB.connection.name}, cluster ${DB.connection.host}`
  )
}

module.exports = connectDB
