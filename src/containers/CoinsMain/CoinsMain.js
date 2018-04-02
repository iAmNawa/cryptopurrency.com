import React, { Component } from 'react';

import './CoinsMain.css'

const ROOT_URL_BTC = 'https://api.gdax.com/products/BTC-USD/ticker'
const ROOT_URL_LTC = 'https://api.gdax.com/products/ltc-USD/ticker';
const ROOT_URL_ETH = 'https://api.gdax.com/products/ETH-USD/ticker';

class CoinsMain extends Component {
  state = {
    btcprice: 0,
    ltcprice: 0,
    ethprice: 0
  }

  letUsGetBtc = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', ROOT_URL_BTC);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({btcprice: request.response.price})
      console.log(request.response.price)
    }.bind(this)
    request.send();
  }

  letUsGetLtc = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', ROOT_URL_LTC);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({ltcprice: request.response.price})
      //console.log(request.response.price)
    }.bind(this)
    request.send();
  }

  letUsGetEth = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', ROOT_URL_ETH);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({ethprice: request.response.price})
      //console.log(request.response.price)
    }.bind(this)
    request.send();
  }

  componentDidMount = () => {
     this.letUsGetBtc();
     this.letUsGetLtc();
     this.letUsGetEth();
     this.interval = setInterval(this.letUsGetBtc, 4000);
     this.interval = setInterval(this.letUsGetLtc, 4500);
     this.interval = setInterval(this.letUsGetEth, 5000);
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
        <div className="coins">LTC: {this.state.ltcprice}</div>
        <div className="coins">ETH: {this.state.ethprice}</div>
     </div>
   )
 }
}

export default CoinsMain;
