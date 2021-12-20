import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getPost } from "../../posts";

export default function Details(props) {
  const { id } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  },[id])




  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.author}</p>
      <img src={post.imgURL} alt="post"/>
      <button>Delete this</button>
      <button>Edit this post</button>
    </Layout>
  )
}