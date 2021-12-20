import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getPost } from "../../services/posts";

export default function Details(props) {
  const { id } = useParams()
  const [post, setPost] = useState({})

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
      <p>{post.post}</p>
      <p>{post.name}</p>
      <img src={post.img} />
      <button>Delete this</button>
      <button>Edit this post</button>
    </Layout>
  )
}