import React from 'react'
import Posts from 'client/src/components/Posts.jsx'

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Posts post={post}/>
      ))}
    </div>
  )
}
