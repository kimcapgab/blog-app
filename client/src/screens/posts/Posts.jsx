import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Posts({post}) {
  return (
    <div>
      <h3>{post.title}</h3>
      <h2>{post.author}</h2>
      <img src={post.imgURL} alt={post.name} />
      <NavLink to={`/post/${post._id}`}>Edit</NavLink>
    </div>
  )
}
