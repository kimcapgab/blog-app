import React from 'react'
// import posts from 'seed/data.js'
import Posts from 'client/src/components/Posts.jsx'

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Posts />
      ))}
    </div>
  )
}
