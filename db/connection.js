import mongoose from "mongoose"

let MONGODB_URI = process.env.PROD_MONGODB ||
'mongodb://127.0.0.1:27017/blogAppDatabase'


mongoose.set('returnOriginal', false)

mongoose 
  .connect(MONGODB_URI)
  .catch((error) => console.error('Error connecting to mongoDB', error.message))
  
mongoose.connection.on("disconnect", () => console.log('disconnected from mongoDB'))
  
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

export default mongoose.connection