import React from 'react';
import { NavLink } from 'react-router-dom';

const LtcPage = (props) => (
    <article>
        <h1>LTC PAGE</h1>
        <NavLink to='/' exact>
          <button>Back to coins list</button>
        </NavLink>
    </article>
  );

export default LtcPage;
