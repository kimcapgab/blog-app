import Layout from "../../components/Layout/Layout"
import { useEffect, useState } from 'react'
import { postNewPosts } from "../../posts"

import { useNavigate, useParams } from "react-router-dom"
import { getPost } from "../../posts"
import { updatePost } from "../../services/posts"


export default function Create({setToggle, posts}) {

  const [author, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setPost] = useState('')
  const [imgURL, setImg] = useState('')

  const { _id } = useParams()
  const nav = useNavigate()



  useEffect(() => {
    if (posts) { 
    const fetchProduct = async () => {
      const post = await getPost(_id)
      
      setName(post.author)
      setTitle(post.title)
      setPost(post.description)
      setImg(post.imgURL)
    }
    fetchProduct()
  }
  }, [_id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      author,
      title,
      description,
      imgURL,
    }
    if (posts) {
      await updatePost(_id, newPost)
    } else {
      await postNewPosts(newPost)
    }
    
    setToggle(e => !e)
    nav('/posts')
  }

  return (
    <Layout>
      <div id='background'>
      <div id='CreateForm'>Create Your Post</div>
      <div id='form-container'>
      <div id='form'>
      <form onSubmit={handleSubmit}>

        {/* <input className='form-field' placeholder='Name' type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input className='form-field' placeholder='Title' type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input className='form-field' placeholder='Post' type='textarea' name='post' value={post} onChange={(e)=>setPost(e.target.value)}/>
        <input className='form-field' placeholder='ImageURL' type='text' name='img' value={img} onChange={(e) => setImg(e.target.value)} /> */}

        <input type='text' name='name' value={author} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type='textarea' name='post' value={description} onChange={(e)=>setPost(e.target.value)}/>
        <input type='text' name='img' value={imgURL} onChange={(e) => setImg(e.target.value)} />

        <button>Submit This Post</button>
        </form>
        </div>
        </div>
        </div>
    </Layout>
  )
}