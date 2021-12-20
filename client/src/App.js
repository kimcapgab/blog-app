import {Routes, Route} from 'react-router-dom'
import './App.css';
import Create from './screens/Create/Create';
import Details from './screens/details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/posts' element={<h1>all posts</h1>} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<h1>edit</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
