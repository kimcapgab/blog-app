import Post from "../models/post.js";


//When application recieves a get request, this code will execute
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

