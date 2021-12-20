import Layout from "../../components/Layout/Layout"
import { useState } from 'react'
import { postNewPosts } from "../../posts"
import { useNavigate } from "react-router-dom"


export default function Create({setToggle}) {
  const [author, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setPost] = useState('')
  const [imgURL, setImg] = useState('')
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      author,
      title,
      description,
      imgURL,
    }

    await postNewPosts(newPost)
    setToggle(e => !e)
    nav('/')
  }

  return (
    <Layout>
      <h1>Create Your Post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={author} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type='textarea' name='post' value={description} onChange={(e)=>setPost(e.target.value)}/>
        <input type='text' name='img' value={imgURL} onChange={(e) => setImg(e.target.value)} />
        <button>Submit This Post</button>
      </form>
    </Layout>
  )
}