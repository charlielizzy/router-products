import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{marginBottom: '100px'}} className='navbar'>
      <h1>NAV</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;