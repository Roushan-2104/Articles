import './App.css'
import { Route,Routes, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ReadMore from './pages/ReadMore'

function App() {
  return (
    <div className="App">
      
        <nav className='navbar'>
          <h1>My Articles</h1>
          <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<ReadMore/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      
    </div>
  );
}

export default App
