import Layout from "../../components/Layout/Layout"
import { useState } from 'react'
import { postNewPost } from "../../services/posts"


export default function Create() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      name,
      title,
      post,
      img,
    }

    await postNewPost(newPost)
  }

  return (
    <Layout>
      <h1>Create Your Post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type='textarea' name='post' value={post} onChange={(e)=>setPost(e.target.value)}/>
        <input type='text' name='img' value={img} onChange={(e) => setImg(e.target.value)} />
        <button>Submit This Post</button>
      </form>
    </Layout>
  )
}