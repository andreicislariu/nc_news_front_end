import React from 'react';
import { Link } from '@reach/router';
import '../css/Nav.css';

const Nav = ({ topics }) => {
  return (
    <nav className="nav">
      {/* <p>Sidebar</p> */}
      <Link className="link" to="/">
        Home
      </Link>
      {topics.map(({ slug }) => (
        <Link key={slug} className="link" to={`/topics/${slug}`}>
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
