import React from 'react';

const Nav = () => {
  return (
    <div style={{marginBottom: '100px'}} className='navbar'>
      <h1>NAV</h1>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;