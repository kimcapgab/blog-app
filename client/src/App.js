import {Routes, Route} from 'react-router-dom'
import './App.css';
import Create from './screens/Create/Create';
import Edit from './screens/edit/Edit';
import Home from './screens/Home/Home';
import Details from './screens/details/Details';
import { useState, useEffect } from 'react'
import { getAllPosts } from './posts';


function App() {

  const [posts, setPosts] = useState([])
  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    const allPosts = async () => {
      const res = await getAllPosts()
      setPosts(res)
      console.log(res)
    }
    allPosts()
  }, [toggle])
  

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/posts' element={<Home posts={posts}/>} />
        <Route path='/detail/:_id' element={<Details posts={posts} setToggle={setToggle}/>} />
        <Route path='/create' element={<Create setToggle={setToggle} />} />
        <Route path='/edit/:_id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
