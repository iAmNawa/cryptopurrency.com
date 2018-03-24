import React, { Component } from 'react';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

import './Navigation.css';
import CoinsMain from '../../containers/CoinsMain/CoinsMain';
import CoinPageCreator from '../../components/CoinPageCreator';

import btc from '../../assets/images/btc1.png';
import ltc from '../../assets/images/ltc.png';
import eth from '../../assets/images/eth.png';

class Navigation extends Component {
 render () {
   return (
    <div>
      <header className="Navigation">
       <nav>
        <ul>
          <li><NavLink to="/btcpage/" exact>
                <img className="imgHover" src={btc} />
              </NavLink>
          </li>
          <li><NavLink to="/ltcpage/" exact>
                <img className="imgHover" src={ltc} />
              </NavLink>
          </li>
          <li><NavLink to="/ethpage/"exact>
                <img className="imgHover" src={eth} />
              </NavLink>
          </li>
        </ul>
       </nav>
      </header>
       <Route path='/' exact component={CoinsMain} />
       <Route path='/btcpage/' component={() => <CoinPageCreator name="BTC" />} />
       <Route path='/ltcpage/' component={() => <CoinPageCreator name="LTC" />} />
       <Route path='/ethpage/' component={() => <CoinPageCreator name="ETH" />} />
    </div>
   )
 }
}

export default Navigation;
