import express from 'express'
import logger from 'morgan'
import db from './db/connection'
import Post from './models/post'
import cors from 'cors'
import postsRoutes from "./routes/posts"


const PORT = process.env.PORT || 3000
const app = expresss()
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use('/api', postsRoutes)

db.on("connected", () => {
  console.log("connected to mongoDB")
  app.listen(PORT, () => console.log(`Express server application is running on port ${PORT}`))
})

