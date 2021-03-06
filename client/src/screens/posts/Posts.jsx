import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Posts({post, _id}) {
  return (
    <div>
      <h3>{post.title}</h3>
      <h2>{post.author}</h2>
      <img src={post.imgURL} alt={post.name} />
      <NavLink to={`/detail/${_id}`}>More</NavLink>
    </div>
  )
}
