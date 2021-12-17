import db from "../db/connection"
import Post from "../models/post"

const insertData = async () => {
  await db.dropDatabase()

  const posts = [
    {
      author: "Kim" ,
    title: "Testing",
    description: "Testing the blog app"
    },
    {
      author: "Mike" ,
    title: "Testing",
    description: "Testing the blog app"
    },
    {
      author: "Ron" ,
    title: "Testing",
    description: "Testing the blog app"
    }

  ]

  await Post.insertMany(posts)
  console.log("Created posts")
  db.close()
}

insertData()