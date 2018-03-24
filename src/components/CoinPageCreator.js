import React from 'react';
import { NavLink } from 'react-router-dom';

const CoinPageCreator = (props) => (
    <article>
        <h1>{props.name} Page</h1>
          <NavLink to='/' exact>
            <button>Back to coins list</button>
          </NavLink>
    </article>
  );

export default CoinPageCreator;
