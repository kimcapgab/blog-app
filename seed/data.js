import db from "../db/connection.js"
import Post from "../models/post.js"

const insertData = async () => {
  await db.dropDatabase()

  const posts = [
    {
      author: "Ron" ,
    title: "Testing",
      description: "Testing the blog app",
    imgURL: "https://tse1.mm.bing.net/th?id=OIP.Su_ow__2OAPc-ROYjzBZRQHaD3&pid=Api&P=0&w=312&h=164"
    },
    {
      author: "Kim" ,
    title: "Testing",
      description: "Testing the blog app",
    imgURL: "https://tse2.mm.bing.net/th?id=OIP.UioRFN9gUR3w8HmJHKS3iwHaKE&pid=Api&P=0&w=300&h=300"
    },
    {
      author: "Mike" ,
    title: "Testing",
    description: "Testing the blog app",
    imgURL: "https://tse4.mm.bing.net/th?id=OIP.hUvyhm4ve8KBNcayxkDnWQHaEL&pid=Api&P=0&w=313&h=178"
    },
    {
    author: "Jeshaiah" ,
    title: "Testing",
    description: "Testing the blog app",
    imgURL: "https://tse4.mm.bing.net/th?id=OIP.WlJpt2LqPxx_Lio9eEmB2AHaE5&pid=Api&P=0&w=317&h=211"
    }
  ]

  await Post.insertMany(posts)
  console.log("Created posts")
  db.close()
}

insertData()