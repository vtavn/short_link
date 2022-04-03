import mongoose from 'mongoose'

/**
 * Connect to MongoDB
 */
const connectDB = async () => {
  try {
    const URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    await mongoose.connect(URI, {
      useMongoClient: true
    })
  } catch (err) {
    process.exit(1)
  }
}

module.exports = connectDB;
