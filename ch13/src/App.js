import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample'

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
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        {/* <li>
          <Link to="/history">history ex</Link>
        </li> */}
      </ul>
      <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/info' element={<About />} />
        <Route path='/profiles' element={<Profiles />} />
        {/* <Route path="/profiles" element={<Profile />} /> */}
        {/* <Route path="/history" element={<HistorySample />} /> */}
      </Routes>
    </div>
  );
}

export default App;
