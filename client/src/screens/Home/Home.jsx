import React, { useEffect, useState } from 'react'

import Posts from '../posts/Posts'

export default function Home({posts}) {

  return (
    <div>
      {posts && posts.map((post) => (
        <Posts post={post} _id={post._id} />
      ))}
    </div>
  )
}
