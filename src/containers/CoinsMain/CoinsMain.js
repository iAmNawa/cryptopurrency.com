import React, { Component } from 'react';

import './CoinsMain.css'

const ROOT_URL = 'http://cryptopurrency.com:45789/results';

class CoinsMain extends Component {
  state = {
    btcprice: 0
  }

  letUsGetResults = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', ROOT_URL);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({btcprice: request.response.price})
      console.log(request.response.price)
    }.bind(this)
    request.send();
  }

  componentDidMount = () => {
     this.interval = setInterval(this.letUsGetResults, 2000);
   }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

 render () {
   return (
     <div className="coinsList">
        <div className="coinsListElements">Coins List:</div>
        <hr className="hrWidth" />
        <div className="coins">BTC: {this.state.btcprice}</div>
        <div className="coins">LTC:</div>
        <div className="coins">ETH:</div>
     </div>
   )
 }
}

export default CoinsMain;
