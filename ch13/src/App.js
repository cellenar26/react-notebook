import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/info' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
