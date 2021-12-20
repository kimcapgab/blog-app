import Layout from "../../components/Layout/Layout"
import { useState } from 'react'
import { postNewPosts } from "../../posts"
import './Create.css'


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

    await postNewPosts(newPost)
  }

  return (
    <Layout>
      <div id='background'>
      <div id='CreateForm'>Create Your Post</div>
      <div id='form-container'>
      <div id='form'>
      <form onSubmit={handleSubmit}>
        <input className='form-field' placeholder='Name' type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input className='form-field' placeholder='Title' type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input className='form-field' placeholder='Post' type='textarea' name='post' value={post} onChange={(e)=>setPost(e.target.value)}/>
        <input className='form-field' placeholder='ImageURL' type='text' name='img' value={img} onChange={(e) => setImg(e.target.value)} />
        <button>Submit This Post</button>
        </form>
        </div>
        </div>
        </div>
    </Layout>
  )
}