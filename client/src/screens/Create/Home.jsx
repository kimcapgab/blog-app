import React from 'react'
import Posts from 'client/src/components/Posts.jsx'

export default function Home({ posts }) {
  return (
    <Layout>
      {posts.map((post) => (
        <Posts post={post}/>
      ))}
    </Layout>
  )
}
