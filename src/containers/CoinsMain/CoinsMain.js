import React, { Component } from 'react';

import './CoinsMain.css'

class CoinsMain extends Component {
 render () {
   return (
     <div className="coinsList">
        <div className="coinsListElements">Coins List:</div>
        <hr className="hrWidth" />
        <div className="coins">Btc:</div>
        <div className="coins">Ltc:</div>
        <div className="coins">Eth:</div>
     </div>
   )
 }
}

export default CoinsMain;
