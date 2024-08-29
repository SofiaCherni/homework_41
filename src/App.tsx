import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';

function App() {
  return (
    <>
      <Router basename='/homework_41'>
        <nav className='nav-menu'>
          <ul className='menu'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<AlbumList />} />
          <Route path="/albums/:id/photos" element={<AlbumDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
