import React from 'react';
import { NavLink } from 'react-router-dom';

const BtcPage = (props) => (
    <article>
        <h1>BTC Page</h1>
          <NavLink to='/' exact>
            <button>Back to coins list</button>
          </NavLink>
    </article>
  );

export default BtcPage;
