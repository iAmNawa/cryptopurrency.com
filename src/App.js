import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './containers/Navigation/Navigation';
import CoinsMain from './containers/CoinsMain/CoinsMain';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div>{this.state.response}</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
