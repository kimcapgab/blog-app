import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getPost } from "../../posts";
import { deletePost } from "../../services/posts";


export default function Details(props) {


  const params = useParams()

  const [post, setPost] = useState({})
  const { _id } = useParams()
  const nav = useNavigate()




  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getPost(_id)
      setPost(product)

    }
    fetchProduct()
  }, [_id])


  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.author}</p>

      <img src={post.imgURL} />
      <button onClick={()=>{deletePost(_id); props.setToggle(e=>!e);nav('/')}}>Delete this</button>
      <button>Edit this post</button>
    </Layout>
  )
}