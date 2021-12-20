import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../posts'
import Posts from '../posts/Posts'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const allPosts = async () => {
      const res = await getAllPosts()
      setPosts(res)
      console.log(res)
    }
    allPosts()
},[])

  return (
    <div>
      {posts && posts.map((post) => (
        <Posts post={post} />
      ))}
    </div>
  )
}
