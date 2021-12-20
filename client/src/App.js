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

  useEffect(() => {
    const allPosts = async () => {
      const res = await getAllPosts()
      setPosts(res)
      console.log(res)
    }
    allPosts()
  }, [])
  
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/posts' element={<Home posts={posts}/>} />
        <Route path='/detail/:id' element={<Details posts={posts}/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
