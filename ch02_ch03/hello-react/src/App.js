import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <ScrollBox ref={ref => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>to bottom</button>
      </div>


    );
  }
}

export default App;
