import mongoose from 'mongoose'
import bluebird from 'bluebird'

/**
 * Connect to MongoDB
 */
const connectDB = async () => {
  try {
    const URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

    await mongoose.connect(URI, {
      useMongoClient: true
    })
    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1)
  }
};

module.exports = connectDB;
