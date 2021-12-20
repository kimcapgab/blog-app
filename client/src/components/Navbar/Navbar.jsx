import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header id='header-container'>
      <Link className='header-element' to="/">Blog App</Link>
      <Link className='header-element' to="/posts">All Posts</Link>
      <Link className='header-element' to="/create">Create New Post</Link>
    </header>
  )
}