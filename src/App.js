import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './containers/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
      </div>
    );
  }
}

export default App;