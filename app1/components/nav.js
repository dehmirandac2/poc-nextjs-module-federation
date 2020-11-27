import * as React from 'react';

const Nav = ({color}) => {
  return (
    <nav
      style={{
        background: color,
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>
      Nav
    </nav>
  );
};

export default Nav;
