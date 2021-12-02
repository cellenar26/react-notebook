import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import { Component, useState } from 'react';
import IterationSample from './IterationSample';
import Info from './Info';
import Average from './Average';

const App = () => {

  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Average />
    </div>


  );

}

export default App;
