import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
 render () {
   return (
     <header className="Navigation">
       <nav>
          <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">BTC</a></li>
                 <li><a href="/">LTC</a></li>
                 <li><a href="/">ETH</a></li>
          </ul>
       </nav>
     </header>
   )
 }
}

export default Navigation;
