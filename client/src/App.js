import {Routes, Route} from 'react-router-dom'
import './App.css';
import Create from './screens/Create/Create';
import Edit from './screens/edit/Edit';
import Home from './screens/Home/Home';

import Navbar from './components/Navbar/Navbar.jsx'

import Details from './screens/details/Details';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/posts' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
