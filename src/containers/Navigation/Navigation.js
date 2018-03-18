import React, { Component } from 'react';

import './Navigation.css';
import btc from '../../assets/images/btc1.png';
import ltc from '../../assets/images/ltc.png';
import eth from '../../assets/images/eth.png';

class Navigation extends Component {
 render () {
   return (
     <header className="Navigation">
       <nav>
          <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/"><img src={btc} /></a></li>
                 <li><a href="/"><img src={ltc} /></a></li>
                 <li><a href="/"><img src={eth} /></a></li>
          </ul>
       </nav>
     </header>
   )
 }
}

export default Navigation;
