import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'

import Posts from '../posts/Posts'

export default function Home({posts}) {

  return (
    <Layout>
      {posts && posts.map((post) => (
        <Posts post={post} _id={post._id} />
      ))}
    </Layout>
  )
}
