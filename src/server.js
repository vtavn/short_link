import express from 'express'
require('dotenv').config()
import ConnectDB from './configs/connectDB'
import { apiV1 } from './routers/v1'

const app = express()

// enable req.body data
app.use(express.json())
app.use(express.urlencoded())

// user APIs v1
app.use('/v1', apiV1)

//connect to mongodb
ConnectDB()

app.listen(process.env.PORT, process.env.HOST, () => console.log(`Server is running at ${process.env.HOST}:${process.env.PORT}`))