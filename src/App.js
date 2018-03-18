import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './containers/Navigation/Navigation';
import CoinsMain from './containers/CoinsMain/CoinsMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <CoinsMain />
      </div>
    );
  }
}

export default App;
