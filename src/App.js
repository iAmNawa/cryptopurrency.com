import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './containers/Navigation/Navigation';
import CoinsMain from './containers/CoinsMain/CoinsMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <CoinsMain />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
