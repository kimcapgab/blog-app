import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/posts' element={<h1>all posts</h1>} />
        <Route path='/detail/:id' element={<h1>details</h1>} />
        <Route path='/create' element={<h1>create</h1>} />
        <Route path='/edit/:id' element={<h1>edit</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
