import React from 'react';
import { NavLink } from 'react-router-dom';

const EthPage = (props) => (
    <article>
        <h1>ETH PAGE</h1>
          <NavLink to='/' exact>
            <button>Back to coins list</button>
          </NavLink>
    </article>
  );

export default EthPage;
