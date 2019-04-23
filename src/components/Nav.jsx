import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="nav">
      <h2>Sidebar</h2>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Nav;
